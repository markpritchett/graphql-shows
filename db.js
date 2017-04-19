const getShows = () => {
    const result = {
        shows: [
            {
                title: 'The Walking Dead',
                seasons: [
                    {
                        name: 'Season 6',
                        episodes: [
                            {
                                title: 'First Time Again',
                                description: 'Rick and the group come up with a plan to lure a massive herd of walkers away from Alexandria, while flashbacks show the events following Pete\'s death, including Rick\s reunion with Morgan.'
                            }
                        ]
                    },
                    {
                        name: 'Season 7',
                        episodes: [
                            {
                                title: 'The Day Will Come When You Won\'t Be',
                                description: 'Having been brutally overpowered by Negan and his Saviors, Rick and the group kneel helplessly as they suffer a heavy loss that will haunt them forever.'
                            },
                            {
                                title: 'The Well',
                                description: 'Carol and Morgan are brought to a community called the Kingdom, led by the eccentric King Ezekiel.'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Breaking Bad',
                seasons: [
                    {
                        name: 'Season 1',
                        episodes: [
                            {
                                title: 'Pilot',
                                description: 'Diagnosed with terminal lung cancer, chemistry teacher Walter White teams up with his former student, Jesse Pinkman, to cook and sell crystal meth.'
                            },
                            {
                                title: 'Cat\'s in the Bag...',
                                description: 'After their first drug deal goes terribly wrong, Walt and Jesse are forced to deal with a corpse and a prisoner. Meanwhile, Skyler grows suspicious of Walt\'s activities.'
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return result
}

module.exports = getShows