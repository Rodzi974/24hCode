(() => {
    new tracking.ColorTracker.registerColor('red', (r, g, b) => {
        let threshold = 85;

        dx = r - 255;
        dy = g - 51;
        dz = b - 51;

        if ((r - b) >= threshold && (g - b) >= threshold) {
            return true;
        }
        return dx * dx + dy * dy + dz * dz < 10000;
    })

    var colors = new tracking.ColorTracker(['red']);

    colors.on('track', function (event) {
        if (event.data.length === 0) {
            // No colors were detected in this frame.
        } else {
            event.data.forEach(function (rect) {
                console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
            });
        }
    });

    tracking.track('#myVideo', colors);

})();