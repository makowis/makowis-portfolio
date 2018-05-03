// @flow
import React, { Children } from 'react';
import type { Node } from 'react';
import type { Slide } from '../models/Slide';
import { slide as className } from './Slides.css';

const SlideComponent = ({ id, content, link, title }: Slide) => (
  <a key={id} href={link.href} className="col mb-2">
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content.content }}
      className={className}
    />
    <p className="text-white my-1">{title}</p>
  </a>
);

const Wrapper = ({ children }: { children?: Node }) => {
  if (Children.count(children) <= 0) {
    return null;
  }
  return children;
};

type Props = {
  slides: Slide[],
};

const Slides = ({ slides }: Props) => (
  <section className="text-center text-white bg-warning p-5">
    <h2>Slides</h2>
    <Wrapper>
      <div className="row my-3">{slides.map(SlideComponent)}</div>
    </Wrapper>
  </section>
);

export default Slides;
