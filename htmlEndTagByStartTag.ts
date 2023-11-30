function htmlEndTagByStartTag(startTag: string): string {

    let endTag = startTag.substring(1, startTag.length-1 );

    if ( endTag.indexOf(' ') === -1 ) {
        return '</' + endTag + '>';
    } else {
        return '</' + endTag.substring(0, endTag.indexOf(' ') ) + '>';
    }

}




console.log( htmlEndTagByStartTag('<i>') );
console.log( htmlEndTagByStartTag("<button type='button' disabled>") );