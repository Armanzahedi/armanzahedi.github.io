import React, { PropsWithChildren, ReactElement } from 'react';

function FadeInSection(props: PropsWithChildren<any>): ReactElement {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    const current = domRef.current;
    if (!current) return;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}

export default FadeInSection;
