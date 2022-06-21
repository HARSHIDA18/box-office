import React from 'react';
import ShowsCard from './ShowsCard';
import Image_Not_Found from '../../images/not-found.png';
import { FlexGrid } from '../Styled';
import { useShows } from '../../misc/Custom-hooks';

function ShowsGrid({ data }) {
  const [staredShow, dispatchstarred] = useShows(); ///SHOWING ERROR FOR THIS LINE IN SHOWFRID.JS
  return (
    <FlexGird>
      {data.map(item => {
        //we can also use this instead of item (({show})) so we can write show instead of item

        return (
          <ShowsCard
            key={item.show.id}
            id={item.show.id}
            name={item.show.name}
            image={item.show.image ? item.show.image.medium : Image_Not_Found}
            summary={item.show.summary}
          />
        );
      })}
    </FlexGird>
  );
}

export default ShowsGrid;
