
const getArticles = (page, articlesPerPage) => {
    console.log('get ', articlesPerPage, 'articles');
    if(page==1) {
        return {
            items: [
                {
                  id: 1,
                  title: 'This should be on page 1',
                  linkToContents: 'https://en.wikipedia.org/wiki/Potato',
                  dateAdded: '24.12.2021',
                  lastModification: '27.12.2021',
                  numberOfViews: 3401,
                  numberOfEditions: 7
                }
            ],
            totalPages: 3
        };
    } else if(page==2) {
        return {
            items: [
                {
                  id: 2,
                  title: 'This should be on page 2',
                  linkToContents: 'https://en.wikipedia.org/wiki/Potato',
                  dateAdded: '23.12.2021',
                  lastModification: '27.12.2021',
                  numberOfViews: 3601,
                  numberOfEditions: 5
                }
            ],
            totalPages: 3
        };
    } else if(page==3) {
        return {
            items: [
                {
                  id: 3,
                  title: 'This should be on page 3',
                  linkToContents: 'https://en.wikipedia.org/wiki/Potato',
                  dateAdded: '20.12.2021',
                  lastModification: '21.12.2021',
                  numberOfViews: 65701,
                  numberOfEditions: 8768
                }
            ],
            totalPages: 3
        };
    }
}

export { getArticles };