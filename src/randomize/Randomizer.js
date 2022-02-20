export default class Randomizer {
    getSongForm() {
        return getRandomFromArray(songForms)
    }

    getThemeForm(form) {
        if(songForms.includes(form)) {
            return [getRandomFromArray(phrases), getRandomFromArray(phrases)]
        } else {
            return [getRandomFromArray(phrases)]
        }
    }

    getTempo() {
        return `${getRandom(110) + 50}bpm`
    }

    getMeter() {
        return getRandomFromArray([...basicTimeSignatures, ...timeSignatures])
    }

    getSimpleMeter() {
        return getRandomFromArray(basicTimeSignatures)
    }

    getKey() {
        return getRandomFromArray(keys)
    }

    getThemeExtras() {        
        const extras = {}

        extras.harmony = getRandomFromArray(harmonies)
        extras.interval = getRandomFromArray(intervals)

        if(extras.harmony === 'Mode') {
            extras.harmony = "The " + getRandomFromArray(modes) + " mode"
        }

        return extras
    }

    getSceneImage() {
        return getRandomFromArray(photos)
    }

    isSimpleMeter(meter) {
        return basicTimeSignatures.includes(meter)
    }

}

function getRandomFromArray(array) {
    return array[getRandom(array.length)]
}
function getRandom(limit) {
    return Math.floor(Math.random() * limit)
}

/* Vars */
const keys = ['C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major', 'F# Major', 
              'Db  Major', 'Ab  Major', 'Eb  Major', 'Bb  Major', 'F  Major', 
              'A Minor', 'E  Minor', 'B  Minor', 'F#  Minor', 'C#  Minor', 'G#  Minor', 
              'D#  Minor', 'Bb  Minor', 'F  Minor', 'C  Minor', 'G  Minor', 'D  Minor']

const basicTimeSignatures = ['3/4', '4/4', '6/8']
const timeSignatures = ['2/4', '5/4', '6/8', '9/8', '7/8', '5/8', '12/8', '6/4', '2/2']

const songForms = ['Binary Form (AB)', 'Ternary Form (ABA)']

const phrases = ['Period', 'Sentence']

const harmonies = ['Modal Interchange', 'Secondary Dominants', 'Strict Functional Harmony', 'Strict Diatonic Harmony', 'Mode', 'Line Cliche',
'Tertiary Harmony', '7th Chords', 'Extended Chords', 'II-V-I progressions', 'Passing Chords']

const intervals = ['3rds', '4ths', '5ths', '6ths', '7ths', 'octaves', '9ths']

const modes = ['Lydian', 'Ionian', 'Mixolydian', 'Dorian', 'Aeolian', 'Phrygian', 'Locrian']

const photos = [
    'https://cdn.pixabay.com/photo/2019/11/14/21/12/village-4627131_1280.jpg', 
    'https://cdn.pixabay.com/photo/2020/08/15/06/03/earth-5489719_1280.jpg', 
    'https://cdn.pixabay.com/photo/2018/04/15/19/56/fantasy-3322691_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/04/11/13/beautifull-morning-in-village-6067691_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/01/10/15/30/castle-6928593_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/02/04/13/51/night-3129908_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/11/28/16/48/castle-5785243_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/25/09/13/bridge-2887353_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/12/21/13/00/city-6885193_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/11/29/14/29/new-zealand-4661427_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/15/02/22/fantasy-2750995_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/29/13/59/trees-4727156_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/06/22/12/53/galaxy-4291517_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/05/06/00/15/cyberpunk-5135622_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/08/18/10/27/steampunk-4413878_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/06/16/24/steampunk-5894941_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg',
    'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/09/05/20/07/cabin-924958_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/30/09/28/buildings-5528981_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/09/13/14/06/new-york-938212_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/22/15/45/lighthouse-2165383_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/02/16/12/nature-3719233_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/01/18/57/mountains-6060586_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/11/05/12/28/stairs-205718_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/16/12/03/woman-6099577_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/19/47/water-1283963_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/09/06/00/35/temple-3657496_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302623_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/05/20/22/58/lost-places-776297_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/01/22/20/42/man-1156619_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/01/21/20/13/kouris-dam-4783880_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/27/11/12/cathedral-3265697_1280.png',
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/07/20/01/industry-3068200_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/05/06/14/43/merida-109143_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/06/29/17/35/tree-4306636_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/10/27/22/15/halloween-4582988_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/10/22/09/32/pumpkins-5675502_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/12/28/20/00/dark-1936954_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/13/15/57/steampunk-3222894_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/10/07/13/18/mystery-4532583_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/28/00/57/bank-2547356_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/21/12/30/dark-1845065_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_1280.jpg',
]