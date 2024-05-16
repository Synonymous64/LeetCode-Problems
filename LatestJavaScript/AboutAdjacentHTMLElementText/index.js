first.insertAdjacentHTML("beforebegin", '<div class="test">beforeend</div>');
first.insertAdjacentHTML("beforeend", '<div class="test">beforeend</div>');
first.insertAdjacentHTML("afterbegin", '<div class="test">beforeend</div>');
first.insertAdjacentHTML("afterend", '<div class="test">beforeend</div>');
first.remove(); //* it does what it says
