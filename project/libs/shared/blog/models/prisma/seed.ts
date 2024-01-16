import { PrismaClient, Prisma } from '@prisma/client';

export const USER_ID = '00000000-0000-0000-0000-000000000000';
export const OWNER_ID = '00000000-0000-0000-0000-000000000001';

function getPostTags(): Prisma.TagCreateInput[] {
  return [
    { id: '00000000-0000-0000-0000-000000000003', text: 'tag1' },
    { id: '00000000-0000-0000-0000-000000000004', text: 'tag2' },
  ];
}

function getPosts(tags: Prisma.TagCreateInput[]): Prisma.PostCreateInput[] {
  return [
    {
      id: '00000000-0000-0000-0000-000000000007',
      authorId: USER_ID,
      postType: 'TEXT',
      publicName: 'post1',
      publicAnnounce: 'publicAnnounce',
      publicText: 'publicText',
      quoteAuthor: 'quoteAuthor',
      photo: 'photo',
      link: 'link',
      tags: {
        connect: tags.slice(1).map(t => ({ id: t.id }))
      },
      likes: {
        create: [
          { ownerId: OWNER_ID }
        ]
      }
    },
    {
      id: '00000000-0000-0000-0000-000000000008',
      authorId: USER_ID,
      postType: 'TEXT',
      publicName: 'post2',
      publicAnnounce: 'publicAnnounce2',
      publicText: 'publicText2',
      quoteAuthor: 'quoteAuthor',
      photo: 'photo',
      link: 'link',
      tags: {
        connect: tags.slice(1).map(t => ({ id: t.id }))
      },
      likes: {
        create: [
          { ownerId: OWNER_ID }
        ]
      },
      comments: {
        create: [
          { authorId: OWNER_ID, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { authorId: OWNER_ID, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.' }
        ]
      }
    }
  ];
}

export async function seed() {
  const client = new PrismaClient();

  try {
    const tags = getPostTags();

    for(const tag of tags) {
      await client.tag.upsert({
        where: { id: tag.id },
        update: {},
        create: tag
      });
    }

    const posts = getPosts(tags);;

    for (const post of posts) {
      await client.post.upsert({
        where: { id: post.id },
        update: {},
        create: post
      });
    }
    console.info('Seeded successfully');
  } catch ( error: unknown){
    console.error(error);
  } finally {
    await client.$disconnect();
  }
}
