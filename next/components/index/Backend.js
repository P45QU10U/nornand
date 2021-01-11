import { SiPhp, SiMysql, SiGraphql } from 'react-icons/si'
import Bubble from '../designSystem/Bubble'
import { Section } from '../designSystem/layout'

export default function Backend() {
  return (
    <Section>
      <div className="bg-green-200 bg-opacity-60 border-t-4 border-green-300 rounded-sm p-8">
        <div className="flex gap-3 mb-4">
          <Bubble bgColor="bg-blue-300" textColor="text-black">
            <SiPhp size="32" title="PHP 7" />
          </Bubble>
          <Bubble bgColor="bg-white" textColor="text-black">
            <SiMysql size="32" title="MySQL" />
          </Bubble>
          <Bubble bgColor="bg-pink-400" textColor="text-black">
            <SiGraphql size="32" title="GraphQL" />
          </Bubble>
        </div>
        <h4>Back</h4>
        <p>
          Côté arrière-guichet, <strong>PHP</strong> est le langage avec lequel j'ai le plus joué (avec CodeIgniter).
          Dernièrement, je m'intéresse de plus en plus à <strong>Node</strong> à l'aide d'Express. Côté BDD, j'aime
          requêter avec SQL. <strong>MySQL</strong>, MSSQL. Je me suis essayé à quelques requêtes{' '}
          <strong>GraphQL</strong> et MongoDB (un cours en fait).
        </p>
      </div>
    </Section>
  )
}
