import GitalkComponent from 'gitalk/dist/gitalk-component';

export default function Comments() {
  return (
    <GitalkComponent
      options={{
        clientID: 'dc32e02e5f1ab0fa88dd',
        clientSecret: 'e45f64b28696c957081378453ea33cee8ef6e513',
        repo: 'TourmalineCore.Articles',
        owner: 'TourmalineCore',
        admin: ['fpandyz', 'gggvnr'],
        id: window.location.pathname,
        distractionFreeMode: false,
      }}
    />
  );
}
