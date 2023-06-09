import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';
import { getSingleArt } from '../../utils/data/artData';

export default function ViewArtsDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [artDetails, setArtDetails] = useState({});

  const getOneArt = () => {
    getSingleArt(id).then((setArtDetails));
  };

  useEffect(() => {
    getOneArt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Head>
        <title>View {artDetails.title}</title>
      </Head>
      <div className="grid place-items-center py-3">
        <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white"> Details for: {artDetails.title}</p>
      </div>
      <div className="w-full grid place-items-center">
        <Image src={artDetails.image_url} alt={artDetails.title} />
      </div>
      <div className="grid place-items-center mt-4 pb-9">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">{artDetails.title}</h2>
            <p className="card-text text-white">Creation Date: {artDetails.creation_date}</p>
            <div className="card-text text-white">
              Tags:
              {artDetails.tag && artDetails.tag.length > 0 ? (
                artDetails.tag?.map((tag) => <p key={tag.id}>#{tag.medium}</p>)
              ) : (
                <p>No Tags yet</p>
              )}
            </div>
            <div className="card-actions">
              <Link href={`/arts/edit/${artDetails.id}`} passHref>
                <Card.Link href="#">Edit</Card.Link>
              </Link>
              <Link href={`/arts/edit/${artDetails.id}`} passHref>
                <Card.Link href="#">Delete</Card.Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
