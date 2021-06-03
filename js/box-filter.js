function BoxFilter() {
    let catalog = document.querySelector('.catalog');
    let box_filter = catalog.querySelector('.catalog-info');
    if (catalog === null || box_filter === null) {
        return;
    }
    let filtred_items = box_filter.querySelector('.info-objects');
    let box_filter_nav = box_filter.querySelector('.info-nav');
    let box_filter__items = box_filter.querySelectorAll('.info-object');

    function closestItemByClass(item, className) {
        var node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    box_filter_nav.addEventListener('click', function (e) {
        let target = e.target;
        let item = closestItemByClass(target, 'info-nav__btn');
        let new_array = [];
        if (item === null) {
            return;
        }
        e.preventDefault();
        let filter_value = item.getAttribute("datafilter");
        let preBtn = box_filter_nav.querySelector(".info-nav__btn.clicked");
        if (preBtn !== null) {
            preBtn.classList.remove("clicked")
        }
        item.classList.add("clicked");




        for (let i = 0; i < box_filter__items.length; i++) {
            if (box_filter__items[i].getAttribute("datacategory") === filter_value) {
                new_array.push(box_filter__items[i]);
            }
        }
        console.table(new_array);
        console.log(filtred_items);
        update_list(new_array, filtred_items);

    });

    function update_list(items, array) {
        clear_list(array);
        for (let i = 0; i < items.length; i++) {
            array.appendChild(items[i]);
        }
    }

    function clear_list(array) {
        while (array.firstChild) {
            array.removeChild(array.firstChild);
        }
    }


    box_filter_nav.querySelector('.info-nav__btn').click();

}


BoxFilter();
