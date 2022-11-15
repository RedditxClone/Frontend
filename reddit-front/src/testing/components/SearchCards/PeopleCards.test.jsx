import axios from 'axios';
import retrieveResults from '../../../services/requests/Search';

jest.mock('axios');

describe('Test for fetching Search Results', () => {
  it('fetches successfully people results', async () => {
    // arrange
    const data = {
      data: {
        data: [
          {
            user_id: '1',
            name: 'mustafa_hamzawy',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            followed: false
          },
          {
            user_id: '2',
            name: 'mustafa_adly',
            description: null,
            followed: true
          },
          {
            user_id: '3',
            name: 'ahmed_said',
            description: null,
            followed: false
          },
          {
            user_id: '4',
            name: 'mustafa_adly',
            description: null,
            followed: false
          },
          {
            user_id: '5',
            name: 'ahmed_said',
            description: null,
            followed: false
          },
          {
            user_id: '6',
            name: 'mustafa_adly',
            description: null,
            followed: false
          },
          {
            user_id: '7',
            name: 'ahmed_said',
            description: null,
            followed: false
          },
          {
            user_id: '8',
            name: 'mustafa_adly',
            description: null,
            followed: false
          },
          {
            user_id: '9',
            name: 'ahmed_said',
            description: null,
            followed: false
          },
          {
            user_id: '10',
            name: 'mustafa_adly',
            description: null,
            followed: false
          },
          {
            user_id: '11',
            name: 'ahmed_said',
            description: null,
            followed: false
          }
        ]
      }
    };

    // act
    axios.get.mockResolvedValue(data);
    await expect(
      retrieveResults({
        key: 'search_key',
        searchingCategory: 'people'
      })
    ).resolves.toEqual(data);
  });
});
