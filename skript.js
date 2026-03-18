document.addEventListener('DOMContentLoaded', () => {
    const allDetails = document.querySelectorAll('details');

    allDetails.forEach((targetDetail) => {
        targetDetail.addEventListener('toggle', () => {
            if (targetDetail.open) {

                const parent = targetDetail.parentElement;

                const siblings = parent.querySelectorAll(':scope > details');

                siblings.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute('open');
                    }
                });
            }
        });
    });
});

