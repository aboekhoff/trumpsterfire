const filterTrumps = (trumps) => 
  trumps.map((trump, index) => (
    {
      key: index,
      url: trump.data.url,
      title: trump.data.title,
      image: trump.data.preview && trump.data.preview.images[0].source.url
    }
  ))

export function getTrumps() {
  return fetch('http://reddit.com/r/politics/new.json')
    .then(res => res.json())
    .then(json => filterTrumps(json.data.children))
}