package search

import (
	"fmt"
	"html/template"
)

type ResponseHit struct {
	HighlightResult struct {
		Content struct {
			FullyHighlighted bool     `json:"fullyHighlighted"`
			MatchLevel       string   `json:"matchLevel"`
			MatchedWords     []string `json:"matchedWords"`
			Value            string   `json:"value"`
		} `json:"content"`
		Title struct {
			MatchLevel   string        `json:"matchLevel"`
			MatchedWords []interface{} `json:"matchedWords"`
			Value        string        `json:"value"`
		} `json:"title"`
	} `json:"_highlightResult"`
	SnippetResult struct {
		Content struct {
			MatchLevel string `json:"matchLevel"`
			Value      string `json:"value"`
		} `json:"content"`
	} `json:"_snippetResult"`
	Content  string `json:"content"`
	Link     string `json:"link"`
	ObjectID string `json:"objectID"`
	Title    string `json:"title"`
}

type Hit struct {
	Snippet     string
	SnippetHTML template.HTML
	Title       string
	Link        string
}

func (h Hit) String() string {
	return fmt.Sprintf("Title=%s", h.Title)
}

func ConvertToHit(r ResponseHit) Hit {
	h := Hit{}
	h.Snippet = r.SnippetResult.Content.Value
	h.Title = r.Title
	h.Link = r.Link
	h.SnippetHTML = template.HTML(h.Snippet)
	return h
}
