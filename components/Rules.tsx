import { TypographyH2, TypographyH4 } from "./typography/Typography";

const Rules = ({ rules }: { rules: string }) => {
  return (
    <div className="flex flex-col mt-10 lg:mt-14">
      <TypographyH2 className="text-primary">Rules</TypographyH2>
      <div className="flex flex-col space-y-2 mt-2">
        {rules.split(",").map((rule, i) => (
          <TypographyH4 key={i} className="font-medium text-base">
            &mdash; {rule}
          </TypographyH4>
        ))}
      </div>
    </div>
  );
};
export default Rules;
