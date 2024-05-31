const cubes = document.querySelectorAll('.small-cube');

const cubeFaces = [];

cubes.forEach(cube => {
  cubeFaces.push(cube.querySelectorAll('.face'));
});

document.addEventListener('scroll', () => {
  const delta = 10 * window.scrollY / window.innerHeight;

  cubeFaces.forEach((cube, index) => {
    const translateX = delta * Math.sin(1 + index * 3);
    const translateY = delta * Math.sin(1 + index * 7);
    const translateZ = delta * Math.sin(1 + index * 11);
    const scale = Math.max(1 - delta * Math.sin(index * 13) / 10, 0.5);

    cube[0].style.transform = `rotateY(90deg) translateZ(${translateX}rem) translateY(${translateY}rem) translateX(${-translateZ}rem) scale(${scale})`;
    cube[1].style.transform = `translateX(${translateX}rem) translateY(${translateY}rem) translateZ(${translateZ}rem) scale(${scale})`;
    cube[2].style.transform = `rotateX(90deg) translateX(${translateX}rem) translateZ(${-translateY}rem) translateY(${translateZ}rem) scale(${scale})`;
  });
});