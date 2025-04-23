<script>
    export let name = "David Enamorado";
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

  .code-theme {
    background-color: #0f0f0f;
    color: #d4d4d4;
    padding: 2rem;
    font-family: 'Fira Code', monospace;
    border-radius: 12px;
    max-width: 900px;
    margin: 3rem auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
  }

  .comment {
    color: #6a9955;
  }

  .tag {
    color: #569cd6;
  }

  .attr {
    color: #9cdcfe;
  }

  .value {
    color: #ce9178;
  }

  .highlight {
    color: #00ffcc;
    font-weight: bold;
    font-size: 2rem;
    display: block;
    margin-bottom: 1.5rem;
  }

  .section {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

<div class="code-theme">
  <span class="highlight">Hello, I'm {name} 👨‍💻</span>

  <div class="section">
    <span class="comment">// Experience</span><br />
    <span class="tag">&lt;p&gt;</span>
    Hi my name is David, I'm Senior Front End Developer with over 8 years of experience in building responsive and efficient web applications. 
    Specialized in <span class="value">Angular</span>, <span class="value">React</span>, <span class="value">Vue</span>, with strong expertise in implementing intuitive and accessible user interfaces. Furthermore, I have experience deploying modular and scalable applications using <span class="value">AWS</span> and <span class="value">Docker</span>, enabling streamlined development and efficient operations. 
    I have led engineering teams and played an active role in developing new products or improving existing ones. I also bring hands-on experience with UX tools like <span class="value">Figma</span> and <span class="value">Adobe XD</span> collaborating closely with design teams and client stakeholders to ensure clear alignment and effective user experience.
    <span class="tag">&lt;/p&gt;</span>
  </div>


  <div class="section">
    <span class="comment">// Community</span><br />
    <span class="tag">&lt;p&gt;</span>
    Organizer at <span class="value">Andes Tech</span> and <span class="value">Dev Café Mendoza</span>.
    <span class="tag">&lt;/p&gt;</span>
  </div>

</div>
