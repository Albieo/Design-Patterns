export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => (
  <>
    {items.map((item, idx) => (
      <ItemComponent key={idx} {...{ [resourceName]: item }} />
    ))}
  </>
)
