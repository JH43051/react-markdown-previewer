import React from 'react';
import marked from 'marked';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
	gfm: true,
	breaks: true,
	renderer: new marked.Renderer()
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
	return `<a target="_blank" href="${href}">${text}</a>`;
}

function Preview(props) {
	return (
    	<div id='preview' dangerouslySetInnerHTML={
			{__html: marked(props.markdown, { renderer: renderer })}
		} />
    );
}

export default Preview;
