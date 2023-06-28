var text = document.getElementById('text');

    var keys = document.getElementsByClassName('keyboard-key');
    for (var i = 0; i < keys.length; i++) {
      keys[i].addEventListener('click', function() {
        var key = this.innerHTML;
        if (key === 'Space') {
          key = ' ';
        }
        else if (key === 'Back') {
          text.innerHTML = text.innerHTML.slice(0, -1);
          return;
        }
        text.innerHTML += key;
      });
    }