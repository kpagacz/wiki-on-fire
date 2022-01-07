
const getArticles = (page, articlesPerPage) => {
    try {
        console.log('get ', articlesPerPage, 'articles');
        if (page == 1) {
            return {
                items: [
                    {
                        id: 1,
                        title: 'This should be on page 1',
                        link: 'https://en.wikipedia.org/wiki/Potato',
                        date: '24.12.2021',
                        views: 3401,
                    }
                ],
                totalPages: 3
            };
        } else if (page == 2) {
            return {
                items: [
                    {
                        id: 2,
                        title: 'This should be on page 2',
                        link: 'https://en.wikipedia.org/wiki/Potato',
                        date: '24.12.2021',
                        views: 101,
                    }
                ],
                totalPages: 3
            };
        } else if (page == 3) {
            return {
                items: [
                    {
                        id: 3,
                        title: 'This should be on page 3',
                        link: 'https://en.wikipedia.org/wiki/Potato',
                        date: '04.01.2022',
                        views: 3488,
                    }
                ],
                totalPages: 3
            };
        }
    } catch (error) {
        throw new Error('Sorry, coś się solidnie zjebało. Nie ma artykułów. Proszę wypierdalać i przyjść później');
    }

}

export { getArticles };