import ExternalLink from '../ExternalLink/ExternalLink';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import Textarea from '../Textarea/Textarea';

function ExampleComponents() {
  return (
    <div className="container example-components">
      <h1 className="title-type-1 example-components__title">Example components</h1>
      <section className="section">
        <h3 className="title-type-3 example-components__subtitle">Input Default</h3>
        <Input id="input" label="Input" description="Input" />

        <h3 className="title-type-3 example-components__subtitle example-components__subtitle--top">Input Error</h3>
        <Input id="input-error" label="Input" description="Input" isError />
      </section>

      <section className="section">
        <h3 className="title-type-3 example-components__subtitle">Textarea Default</h3>
        <Textarea id="textarea" label="Textarea" description="Textarea" />

        <h3 className="title-type-3 example-components__subtitle example-components__subtitle--top">Textarea Error</h3>
        <Textarea id="textarea-error" label="Textarea" description="Textarea" isError />
      </section>

      <section className="section">
        <h3 className="title-type-3 example-components__subtitle">Primary Button</h3>
        <PrimaryButton>PrimaryButton</PrimaryButton>
      </section>

      <section className="section">
        <h3 className="title-type-3 example-components__subtitle">Secondary Button</h3>
        <SecondaryButton />
      </section>

      <section className="section">
        <h3 className="title-type-3 example-components__subtitle">ExternalLink</h3>
        <ExternalLink href="/" className="example-components__external-link">ExternalLink</ExternalLink>
      </section>
    </div>

  );
}

export default ExampleComponents;
