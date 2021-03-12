import React, { useState } from "react";
import styled from "styled-components";

function Pokemon({ pokemon }) {
  const { sprites, name, stats } = pokemon;
  const [image, setImage] = useState(sprites.front_default);

  return (
    <Wrapper>
      <img
        src={image}
        onMouseEnter={() =>
          setImage(sprites.back_default || sprites.front_default)
        }
        onMouseLeave={() => setImage(sprites.front_default)}
        alt={name}
      />
      <div>
        <h2>{name}</h2>
        {stats.map((stat) => (
          <div key={stat.stat.name}>
            <strong>{stat.stat.name}: </strong>
            <span>{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  border-bottom: 4px solid black;
  padding: 1.5rem 0;
  grid-template-columns: 100px 1fr;

  :last-child {
    border-bottom: none;
  }
`;

export default Pokemon;
