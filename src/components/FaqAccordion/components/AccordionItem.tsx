"use client";
import { Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { AiOutlinePlus } from "react-icons/ai";

interface AccordionItemProps {
  value: string;
  header: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  header,
  content,
}) => {
  return (
    <Item value={value}>
      <Header>
        <Trigger className="mb-4 flex w-full border-b border-border-tertiary py-4 text-start text-lg font-light text-quinary">
          {header}
          <AiOutlinePlus size={30} className="ml-auto text-quinary" />
        </Trigger>
      </Header>
      <Content className="accordion-content text-xl font-light leading-7 text-foreground">
        {content}
      </Content>
    </Item>
  );
};

export default AccordionItem;
