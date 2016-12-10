Array
    .from(document.querySelectorAll('.pad[data-key]'))
    .forEach(function (pad) {
        const key = pad.dataset.key,
            sample = pad.dataset.sample,
            target = `Key${key}`,
            audio = document.querySelector(`audio[data-sample='${sample}']`);

        pad.innerHTML = `<p class="key">${key}</p><small class="sample">${sample}</small>`;

        document.addEventListener('keydown', function (e) {
            if (e.code == target) {
                pad.classList.toggle('pad-playing');
                audio.currentTime = 0;
                audio.play();
            }
        });

        pad.addEventListener('transitionend', function (e) {
            pad.classList.remove('pad-playing');
        });
    });
