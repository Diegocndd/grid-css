const navigate = (page) => {
    const basicContainer = document.getElementsByClassName('container-basic')[0];
    const mediumContainer = document.getElementsByClassName('container-medium')[0];
    const hardContainer = document.getElementsByClassName('container-hard')[0];

    switch (page) {
        case 'basic':
            basicContainer.style.display = 'grid';
            mediumContainer.style.display = 'none';
            hardContainer.style.display = 'none';
            break;
        
        case 'medium':
            basicContainer.style.display = 'none';
            mediumContainer.style.display = 'grid';
            hardContainer.style.display = 'none';
            break;

        case 'hard':
            basicContainer.style.display = 'none';
            mediumContainer.style.display = 'none';
            hardContainer.style.display = 'grid';
            break;
    
        default:
            break;
    }
}

const floatingButton = document.getElementsByClassName('floating')[0];

floatingButton.addEventListener('click', () => {
    const floatingMenu = document.getElementsByClassName('menu')[0];
    const iconPlus = document.getElementsByClassName('display-menu-icon')[0];

    let displayMenu = floatingMenu.style.visibility;

    if (displayMenu !== 'visible') {
        iconPlus.style.transform = 'rotate(45deg)';
    } else {
        iconPlus.style.transform = 'rotate(0deg)';
    }

    floatingMenu.style.opacity = displayMenu === 'visible' ? '0' : '1';
    floatingMenu.style.visibility = displayMenu === 'visible' ? 'hidden' : 'visible';
});

const floatingMenu = document.getElementsByClassName('menu')[0];

for (let i = 0; i < 3; i++) {
    floatingMenu.children[0]?.children[i].addEventListener('click', () => {
        if (i == 0) {
            navigate('basic');          
        } else if (i == 1) {
            navigate('medium');
        } else {
            navigate('hard');
        }
    });  
}

const urlParams = window.location.search.split('?');

if (urlParams.length > 1) {
    navigate(urlParams[1].split('=')[1])
}
