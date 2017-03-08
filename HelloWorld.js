// Mithril component

var HelloWorld = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "My first component"),
            m("button", "a button"),
        ])
    }
}