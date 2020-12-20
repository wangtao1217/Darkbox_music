const format_lyric = (str) => {
    const item = str
    const lines = item?item.split('\n'):[]

    const lyric = lines.map( i => {
        let temp = i.split(']')
        if(temp.length < 2)return '...'
        let time = i.match(/\[[^\[\]\n]*\]/g)[0].slice(1,-2).split(':')
        time = Number(time[0] + time[1])
        return [time, temp[1]]
    })

    return lyric
}

export default format_lyric