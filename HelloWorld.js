// Mithril component

var count = 0;

var HelloWorld = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "My first component"),
            m("button", { onclick: increment }, count + " clicks"),
        ])
    }
}

var increment = function() {
    m.request({
        method: "PUT",
        url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
        data: {count: count + 1},
        withCredentials: true,
    })
    .then(function(data) {
        count = parseInt(data.count)
    })
}