// Mithril component

var count = 0;

var HelloWorld = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "My first component"),
            m("button", { onclick: function() {count++} }, count + " clicks"),
        ])
    }
}