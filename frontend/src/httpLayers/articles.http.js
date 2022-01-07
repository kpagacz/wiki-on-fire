
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
                        views: 3488,
                    }
                ],
                totalPages: 3
            };
        }
    } catch (error) {
        throw new Error('Sorry, something wron with articles');
    }

}

export { getArticles };