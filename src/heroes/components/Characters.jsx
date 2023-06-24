import PropTypes from 'prop-types'

export const Characters = ({ characters, alter_ego }) => {
  if (alter_ego === characters) return <></>

  return <p>{characters}</p>
}

Characters.propTypes = {
  characters: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
}
