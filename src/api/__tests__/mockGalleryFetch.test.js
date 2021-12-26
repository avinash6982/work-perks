import { mockGalleryFetch } from "../mockGalleryFetch"

describe('mock gallery fetch api', () => {

    test('returns an object', async () => {

        let result = await mockGalleryFetch()
        expect(typeof(result)).toBe('object')
    })
    
    test('returned object is non empty', async () => {

        let result = await mockGalleryFetch()
        expect(result.length).not.toBe(0)
    })
})