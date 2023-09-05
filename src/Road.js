function Project404()
{
    let road='';
    road += '<table class=\"road\">' +
        '<tr>'
    for (let i = 0; i < 10; i++) {
        road += '<td class=\"cell\">'
        road += Math.random() >= 0.5 ?
            '<img src=\"/img/cactus.png\">' :
            ' '
        road += '</td>'
    }
    road += '</tr>' +
        '</table>'
    return road
}
export default Project404