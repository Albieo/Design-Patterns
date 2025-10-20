export const inLayout = Component => props => {
  return (
    <div className='section'>
      <div className='center-align'>
        <Component {...props} />
      </div>
    </div>
  )
}
