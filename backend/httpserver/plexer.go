package httpserver

import (
	"log"
	"sync"

	"github.com/google/uuid"
)

type Choo chan struct{}

type Plexer struct {
	registry sync.Map
}

func (p *Plexer) Register(c Choo) func() {
	id := uuid.New()
	p.registry.Store(id, c)
	c <- struct{}{}
	return func() {
		p.registry.Delete(id)
	}
}

func (p *Plexer) PingAll() {
	log.Println("Ping all")
	p.registry.Range(func(_, v interface{}) bool {
		c := v.(Choo)
		c <- struct{}{}
		return true
	})
}
