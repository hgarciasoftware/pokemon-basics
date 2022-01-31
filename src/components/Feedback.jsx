import { Giscus } from '@giscus/react';

function Feedback() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '37.875rem', padding: '1rem', width: '100%', overflowY: 'auto' }}>
      <section className="page-description bold">
        <p>The feedback page utilizes a comments system that's powered by GitHub Discussions.</p>
        <p>To comment, you must authorize the giscus app to post on your behalf.</p>
        <p>In order to reduce spam, only GitHub users can leave comments and reactions.</p>
      </section>
      <Giscus
        repo="hgarciasoftware/pokemon-basics"
        repoId="R_kgDOGux7iA"
        category="Announcements"
        categoryId="DIC_kwDOGux7iM4CA7fM"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="light_protanopia"
      />
    </div>
  );
}

export default Feedback;
