import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTags } from '../../hooks/useTags';

function TagsBlock() {
    const tags = useTags();

    const tagsList = tags.map(item => {
        const itemsCount = item.decks.length + item.flashcards.length;

        return (
            <li>
                <Link to={`/tag/${item.name}`}>
                    {`#${item.name} (${itemsCount})`}
                </Link>
            </li>
        );
    });


    return (
        <ul>
            {tagsList}
        </ul>
    );
}

export default TagsBlock;
