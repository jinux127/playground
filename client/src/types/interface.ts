import React from 'react';

export interface IFinder {
  date: string;
  desc: string;
  href: string;
  likes: string;
  title: string;
}

export interface ITrash {
  date: string;
  desc: string;
  href: string;
  likes: string;
  title: string;
}

export interface IMemo {
  title: string;
  date: string;
  content: React.ReactNode;
}
