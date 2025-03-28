Module.register("MMM-MultiText", {
  defaults: {
    lines: [
      { text: "Hello, MagicMirror!", color: "#FF5733" }, 
      { text: "This is line two.", color: "#33FF57" },
      { text: "Another line!", color: "#5733FF" }
    ],
    updateInterval: 60000 // Refresh every 60 seconds
  },

  start: function () {
    this.scheduleUpdate();
  },

  scheduleUpdate: function () {
    setInterval(() => {
      this.updateDom();
    }, this.config.updateInterval);
  },

  getStyles: function () {
    return ["MMM-MultiText.css"];
  },

  getDom: function () {
    let wrapper = document.createElement("div");

    this.config.lines.forEach(line => {
      let lineDiv = document.createElement("div");
      lineDiv.innerHTML = line.text;
      lineDiv.style.color = line.color;
      lineDiv.className = "multi-text-line";
      wrapper.appendChild(lineDiv);
    });

    return wrapper;
  }
});
