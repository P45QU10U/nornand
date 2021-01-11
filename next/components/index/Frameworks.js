import { SiReact, SiGit, SiTailwindcss } from 'react-icons/si'
import Bubble from '../designSystem/Bubble'
import { Section } from '../designSystem/layout'

export default function Frameworks() {
  return (
    <Section>
      <div className="bg-red-200 bg-opacity-60 border-t-4 border-red-300 rounded-sm p-8">
        <div className=" flex gap-3 mb-4">
          <Bubble bgColor="bg-black" textColor="text-cyan-400">
            <SiReact size="32" title="React" />
          </Bubble>
          <Bubble bgColor="bg-white" textColor="text-red-400">
            <SiGit size="32" title="Git" />
          </Bubble>
          <Bubble bgColor="bg-white" textColor="text-cyan-400">
            <SiTailwindcss size="32" title="Tailwind CSS" />
          </Bubble>
        </div>
        <h4>Aides</h4>
        <p>
          Pour me faciliter le développement, j'utilise <strong>React</strong> 💗, <strong>Git</strong>, et tout
          récemment <strong>TailwindCSS</strong> qui est diablement efficace (si, si, essayez !).
        </p>
      </div>
    </Section>
  )
}
