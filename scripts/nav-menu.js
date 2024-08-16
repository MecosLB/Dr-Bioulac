(() => {
    const toggleBtn = document.querySelector('#toggleBtn'),
        body = document.querySelector('body'),
        sidebar = document.querySelector('#sidebar');
    let isOpen = false;

    const add = (className) => {
        toggleBtn.classList.add(className);
        body.classList.add('overflow-hidden');
    };

    const remove = (className) => {
        toggleBtn.classList.remove(className);
        body.classList.remove('overflow-hidden');
    };

    const ACTIONS = {
        true: add,
        false: remove,
    };

    document.addEventListener('DOMContentLoaded', (e) => {
        // MOBILE SIDEBAR
        const tlSidebar = new gsap.timeline({ paused: true });

        tlSidebar.to(sidebar, {
            right: 0,
            display: 'initial',
            ease: 'easeInOut'
        }, 0.25)
            .reverse();

        toggleBtn.addEventListener('click', () => {
            if (!isOpen) {
                isOpen = true;
                tlSidebar.reversed(!isOpen);
                ACTIONS[isOpen]('open');
            } else {
                tlSidebar.reverse();
                isOpen = false;
                ACTIONS[isOpen]('open');
            }
        });
    });
})();