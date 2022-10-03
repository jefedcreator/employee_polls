import React from 'react'
import { connect } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ authedUser,children }) => {

    const location = useLocation();
      
    return authedUser !== undefined ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      );
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
})

export default connect(mapStateToProps)(RequireAuth)