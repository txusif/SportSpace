const Rules = ({ rules }: { rules: string }) => {
  return (
    <div className="flex flex-col mt-14">
      <h2 className="text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Rules
      </h2>
      <div className="flex flex-col capitalize space-y-2">
        {rules.split(",").map((rule, i) => (
          <p key={i} className="">
            &mdash; {rule}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Rules;