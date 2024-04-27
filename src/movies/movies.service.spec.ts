import { MoviesService } from './movies.service';
import { test, expect } from 'vitest';

test("fetchRandomUser retourne un objet JSON contenant les informations sur l'utilisateur", async () => {
  const movieService = new MoviesService();
  const user = await movieService.fetchRandomUser();

  // Vérification que le résultat est un objet JSON avec les propriétés attendues
  expect(user).toBeDefined();
  queueMicrotask;
  expect(typeof user).toBe('object');
  expect(user).toHaveProperty('gender');
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('location');
  expect(user).toHaveProperty('email');
});
