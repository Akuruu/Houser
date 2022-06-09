import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 fixed-bottom mt-auto text-dark p-0">
      <div className="container text-center">
        {location.pathname !== '/' && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <br />
        <a className="bottom" href="https://github.com/Akuruu/Houser">
          &copy; {new Date().getFullYear()} The HOA Association{' '}
        </a>
        <div className="display-flex justify-center">
          <a className="p-3" href="https://github.com/Akuruu">
            {' '}
            Anjali Smith{' '}
          </a>
          <a className="p-3" href="https://github.com/haileyrb25">
            {' '}
            Hailey Bates-Corona{' '}
          </a>
          <a className="p-3" href="https://github.com/JosephLMurray">
            {' '}
            Joseph Murray
          </a>
          <a className="p-3" href="https://github.com/CanRo2B">
            {' '}
            Candace Robbins{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
