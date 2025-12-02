import beautySalonImg from '../assets/projects/beauty-salon.jpg';
import proksrentImg from '../assets/projects/proksrent.jpg';

export const projectsData = [
	{
		title: 'Beauty Salon',
		description: 'Програмне забезпечення для автоматизації управління замовленнями в салоні краси',
		tech: ['Windows Forms', 'EF',],
		link: 'https://youtu.be/7bhCNq6XbTQ?si=bi8KS-e6xuNkUQ-W',
		gradient: 'from-purple-600 to-pink-600',
		image: beautySalonImg 

	},
	{
		title: 'PROKSRent',
		description: 'Веб-застосунок для управління послугою прокату автомобілів',
		tech: ['ASP.NET MVC', 'EF'],
		link: 'https://github.com/kksand3r/PROKSRent',
		gradient: 'from-blue-600 to-cyan-600',
		image: proksrentImg // Додано зображення

	}
];