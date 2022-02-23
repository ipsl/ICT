var letters = ['space', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var letter_dist = [1.850573e-01, 6.405513e-02, 1.458026e-02, 2.075194e-02, 3.376699e-02, 9.750295e-02, 1.838848e-02, 1.919354e-02, 4.972394e-02, 5.615151e-02, 1.641427e-03, 8.303770e-03, 3.779366e-02, 2.170672e-02, 5.522667e-02, 6.311464e-02, 1.557450e-02, 9.139455e-04, 4.832342e-02, 5.286797e-02, 6.920466e-02, 2.299223e-02, 6.715424e-03, 1.798765e-02, 9.962891e-04, 1.673072e-02, 7.342868e-04];
var letter_cond_dist = [[0, 8.566177e-02, 2.296383e-02, 2.643143e-02, 5.754449e-01, 3.515453e-01, 3.812960e-01, 3.630336e-01, 1.053554e-01, 4.087890e-02, 8.457711e-02, 3.083921e-01, 1.369022e-01, 2.105527e-01, 2.766133e-01, 1.117808e-01, 1.044307e-01, 5.956813e-03, 2.559816e-01, 4.211902e-01, 2.531246e-01, 6.686201e-02, 5.269558e-03, 1.151634e-01, 2.158470e-01, 6.563352e-01, 8.619092e-02], 
[1.001280e-01, 9.242930e-04, 9.759627e-02, 1.231390e-01, 4.048852e-02, 4.953377e-02, 7.464565e-02, 7.055737e-02, 1.414455e-01, 1.628854e-02, 1.496683e-01, 1.188330e-02, 9.215644e-02, 1.497006e-01, 2.810740e-02, 9.747261e-03, 1.225203e-01, 0, 7.073751e-02, 4.986677e-02, 3.611851e-02, 2.208015e-02, 6.880827e-02, 2.055085e-01, 6.420765e-02, 7.972341e-03, 6.302132e-02, ], 
[5.319345e-02, 1.926142e-02, 1.474912e-02, 3.279334e-05, 1.652593e-03, 2.373042e-03, 2.220495e-04, 9.927670e-04, 8.211641e-04, 8.047314e-03, 0, 3.442059e-03, 2.881014e-03, 2.984607e-02, 2.735574e-03, 8.625895e-03, 1.179761e-03, 0, 3.985410e-03, 1.879336e-03, 7.473474e-04, 2.293850e-02, 0, 1.551150e-03, 0, 5.084401e-03, 9.267841e-04, ], 
[4.228998e-02, 3.849096e-02, 4.667445e-05, 1.498655e-02, 6.449142e-04, 1.673693e-02, 4.070908e-04, 7.091193e-04, 5.063846e-04, 4.952007e-02, 8.291874e-04, 1.802983e-03, 2.106742e-03, 7.210709e-04, 3.147142e-02, 1.365048e-02, 8.302019e-04, 0, 1.208298e-02, 1.444257e-02, 6.676959e-03, 4.028296e-02, 0, 9.079903e-04, 1.222678e-01, 4.189546e-03, 0, ], 
[3.147110e-02, 3.955336e-02, 5.600933e-04, 7.542467e-04, 1.322074e-02, 7.789162e-02, 1.110248e-04, 1.028223e-03, 3.284657e-04, 4.823541e-02, 0, 9.014916e-04, 5.720614e-02, 4.389128e-04, 1.594519e-01, 2.145691e-02, 3.495587e-04, 0, 3.272825e-02, 8.495630e-04, 3.835072e-04, 2.104422e-02, 0, 3.972458e-03, 6.830601e-04, 2.643889e-03, 0, ], 
[1.802289e-02, 1.094278e-03, 2.415869e-01, 1.472749e-01, 1.138072e-01, 3.335520e-02, 7.719922e-02, 1.204794e-01, 4.673245e-01, 3.215290e-02, 2.043947e-01, 3.169972e-01, 1.535040e-01, 2.185158e-01, 8.416201e-02, 7.957388e-03, 1.655160e-01, 0, 1.954682e-01, 9.809878e-02, 9.395927e-02, 3.362339e-02, 6.858533e-01, 1.321126e-01, 8.743169e-02, 6.609721e-02, 4.439296e-01, ], 
[3.828531e-02, 8.956080e-03, 1.866978e-04, 2.295534e-04, 1.390596e-03, 7.803121e-03, 5.051627e-02, 7.800312e-04, 1.026455e-03, 2.077274e-02, 0, 2.622521e-03, 1.388289e-02, 1.191335e-03, 4.263552e-03, 1.006103e-01, 1.179761e-03, 0, 3.661508e-03, 9.782847e-04, 7.571809e-04, 7.636299e-03, 0, 3.631961e-03, 1.297814e-02, 2.521863e-03, 0, ], 
[2.309769e-02, 2.078066e-02, 2.333722e-04, 3.279334e-05, 5.542232e-03, 6.169910e-03, 7.401651e-05, 1.723160e-02, 1.094886e-04, 3.750970e-02, 0, 1.475168e-03, 1.188418e-03, 1.567546e-04, 1.462176e-01, 6.221427e-03, 6.991174e-04, 0, 1.080145e-02, 4.633980e-04, 3.245061e-04, 5.232937e-02, 0, 1.513317e-04, 0, 1.667684e-03, 1.297498e-02, ], 
[7.512540e-02, 3.229713e-03, 2.800467e-04, 1.609497e-01, 1.168907e-03, 3.706134e-03, 1.850413e-04, 1.264714e-01, 2.326632e-04, 1.696723e-04, 0, 2.130798e-03, 4.501585e-04, 5.329655e-04, 1.330820e-03, 3.547399e-03, 5.597308e-02, 0, 2.563055e-03, 5.863272e-02, 3.176030e-01, 2.071864e-04, 0, 1.618114e-01, 2.322404e-02, 3.457393e-03, 3.707136e-03, ], 
[5.883456e-02, 4.742579e-02, 4.858810e-02, 4.892766e-02, 6.590217e-02, 1.089506e-02, 7.386847e-02, 4.850376e-02, 1.359574e-01, 4.968974e-04, 3.606965e-02, 1.535814e-01, 1.197962e-01, 8.483556e-02, 3.435486e-02, 1.282024e-02, 7.314515e-02, 0, 8.346829e-02, 5.119261e-02, 6.464555e-02, 2.808856e-02, 1.571747e-01, 1.815602e-01, 7.855191e-02, 1.598536e-02, 8.341057e-02, ], 
[7.101040e-03, 6.693156e-04, 3.780630e-03, 0, 3.023036e-04, 2.791814e-04, 3.700825e-05, 1.772798e-04, 1.368607e-05, 2.423890e-04, 0, 4.097689e-04, 1.800634e-05, 1.881055e-04, 1.022759e-03, 1.132149e-03, 3.058638e-04, 0, 2.253236e-04, 9.010517e-05, 9.833519e-05, 2.367845e-04, 0, 7.566586e-05, 0, 2.033760e-04, 0, ], 
[7.744583e-03, 1.420436e-02, 4.667445e-05, 9.710107e-02, 6.852214e-04, 1.556437e-03, 0, 2.481917e-04, 1.505468e-04, 1.093174e-02, 0, 9.834453e-04, 1.047969e-02, 1.567546e-04, 1.290156e-02, 1.370439e-02, 7.428122e-04, 0, 1.273078e-02, 8.791690e-03, 1.180022e-04, 1.479903e-03, 0, 1.210654e-03, 0, 2.033760e-04, 0, ], 
[3.193078e-02, 8.349446e-02, 1.707351e-01, 4.141798e-02, 1.271690e-02, 3.986711e-02, 4.004293e-02, 3.506595e-02, 2.039224e-03, 5.056234e-02, 0, 2.483199e-02, 1.453292e-01, 3.323197e-03, 6.838934e-03, 3.825584e-02, 7.904396e-02, 0, 1.226605e-02, 1.168793e-02, 1.444544e-02, 9.071805e-02, 3.040130e-04, 1.131205e-02, 3.415301e-03, 1.183649e-02, 3.243744e-02, ], 
[4.420958e-02, 3.122410e-02, 9.801634e-04, 3.279334e-04, 3.285032e-03, 1.868422e-02, 2.220495e-04, 2.091902e-03, 1.792875e-03, 4.476925e-02, 0, 1.966891e-03, 3.997407e-03, 1.774462e-02, 1.836038e-03, 6.155654e-02, 8.302019e-04, 0, 1.525159e-02, 8.148081e-03, 1.740533e-03, 4.078612e-02, 0, 3.404964e-04, 2.049180e-03, 7.890990e-03, 8.341057e-03, ], 
[2.080299e-02, 1.905318e-01, 8.868145e-04, 3.607267e-04, 8.766803e-03, 7.974818e-02, 2.220495e-04, 1.542334e-02, 3.708925e-03, 2.827346e-01, 4.145937e-04, 7.285691e-02, 4.321521e-04, 5.956673e-03, 1.361626e-02, 1.298736e-01, 5.243380e-04, 0, 2.389838e-02, 4.119093e-03, 1.130855e-03, 1.130054e-01, 5.066883e-04, 4.468069e-02, 0, 9.273948e-03, 0, ], 
[6.667843e-02, 2.762255e-04, 1.315753e-01, 1.804617e-01, 6.156916e-02, 3.552584e-03, 1.463676e-01, 7.740037e-02, 7.338470e-02, 3.687948e-02, 3.047264e-01, 5.736764e-03, 1.125756e-01, 1.005110e-01, 5.490863e-02, 5.633788e-02, 1.260596e-01, 7.446016e-04, 9.072089e-02, 4.279995e-02, 8.835416e-02, 2.604629e-03, 5.968788e-02, 9.692797e-02, 2.800546e-02, 1.273541e-01, 1.510658e-01, ], 
[3.532501e-02, 1.990948e-02, 1.400233e-04, 9.838001e-05, 5.441464e-04, 1.296798e-02, 3.330743e-04, 7.445752e-04, 6.158731e-04, 1.068935e-02, 0, 1.147353e-03, 3.601268e-03, 4.313885e-02, 6.161202e-04, 1.831924e-02, 5.199685e-02, 0, 5.112028e-03, 2.014494e-02, 4.523419e-04, 5.005032e-02, 0, 3.404964e-04, 1.591530e-01, 4.881025e-03, 1.853568e-03, ], 
[2.754365e-03, 2.018571e-04, 0, 1.344527e-03, 6.046071e-05, 1.326112e-03, 3.700825e-05, 0, 6.843034e-05, 7.756448e-04, 0, 1.639076e-04, 3.601268e-05, 0, 6.161202e-04, 2.048650e-04, 0, 0, 1.549099e-04, 2.149652e-03, 2.950056e-05, 5.919612e-05, 0, 0, 9.562842e-03, 0, 9.267841e-04, ], 
[2.155686e-02, 1.014597e-01, 8.788798e-02, 5.046894e-02, 2.549427e-02, 1.330509e-01, 7.438659e-02, 5.740321e-02, 1.256381e-02, 4.438142e-02, 0, 2.704475e-03, 9.003169e-04, 2.959526e-02, 1.799071e-03, 1.071444e-01, 1.081010e-01, 7.446016e-04, 1.919475e-02, 5.148867e-04, 3.133942e-02, 1.447937e-01, 9.120389e-04, 1.479268e-02, 1.366120e-03, 6.630059e-03, 5.560704e-03, ], 
[8.709898e-02, 8.059410e-02, 1.600933e-02, 1.934807e-03, 2.815454e-02, 6.927887e-02, 2.923652e-03, 2.372004e-02, 2.764586e-03, 1.133774e-01, 0, 6.236683e-02, 1.991501e-02, 2.338778e-02, 3.497098e-02, 3.032002e-02, 3.202831e-02, 0, 5.285246e-02, 4.184741e-02, 2.249909e-02, 1.260581e-01, 3.040130e-04, 1.842464e-02, 2.732240e-03, 5.450478e-02, 4.633920e-03, ], 
[1.409029e-01, 1.265006e-01, 3.593932e-03, 5.735555e-02, 5.643000e-04, 3.182668e-02, 4.207838e-02, 2.552829e-03, 3.025990e-02, 1.232427e-01, 0, 1.721029e-03, 1.521536e-02, 1.159984e-03, 7.864158e-02, 4.290304e-02, 2.250284e-02, 0, 3.930488e-02, 1.242035e-01, 2.337427e-02, 1.303794e-01, 0, 1.588983e-03, 1.612022e-01, 7.484238e-03, 3.707136e-03, ], 
[9.951017e-03, 1.443809e-02, 8.634772e-02, 3.859776e-02, 1.517564e-02, 1.500600e-03, 3.327042e-02, 2.985392e-02, 1.200268e-02, 1.951231e-03, 2.189055e-01, 4.015735e-03, 2.511884e-02, 4.138320e-02, 6.185846e-03, 1.253882e-01, 4.321419e-02, 9.925540e-01, 1.995522e-02, 2.459871e-02, 1.741516e-02, 3.255786e-04, 2.837454e-03, 6.431598e-04, 1.229508e-02, 8.135042e-04, 8.341057e-03, ], 
[6.424400e-03, 2.088690e-02, 7.001167e-04, 0, 1.934743e-03, 1.344259e-02, 0, 3.545596e-05, 0, 1.979106e-02, 0, 3.278151e-04, 4.285508e-03, 6.270182e-05, 3.129890e-03, 1.677737e-02, 4.369484e-05, 0, 4.858539e-03, 9.010517e-05, 9.833519e-06, 1.213520e-03, 2.128091e-03, 0, 0, 4.474273e-04, 2.780352e-03, ], 
[6.219937e-02, 1.201581e-02, 1.400233e-04, 0, 2.841653e-03, 7.949692e-03, 2.220495e-04, 9.927670e-04, 4.379542e-04, 9.695559e-05, 4.145937e-04, 3.114244e-03, 4.393547e-03, 3.135091e-04, 9.734699e-04, 5.169068e-02, 1.136066e-03, 0, 2.732048e-03, 8.019360e-03, 9.214007e-03, 2.959806e-05, 0, 7.944915e-04, 3.415301e-03, 2.318487e-03, 0, ], 
[7.354780e-05, 1.274887e-03, 0, 3.279334e-05, 0, 6.253664e-03, 0, 0, 0, 2.593562e-03, 0, 0, 0, 0, 1.971585e-04, 1.768308e-03, 0, 0, 1.408272e-05, 0, 9.833519e-06, 8.583437e-04, 0, 0, 0, 8.135042e-05, 0, ], 
[1.418737e-02, 3.434758e-02, 7.038506e-02, 7.444087e-03, 1.856144e-02, 1.810492e-02, 1.332297e-03, 4.361084e-03, 7.089384e-03, 2.423890e-05, 0, 1.442386e-02, 7.357390e-02, 3.658651e-02, 1.206363e-02, 7.526093e-03, 7.646596e-03, 0, 2.906674e-02, 5.033017e-03, 1.494695e-02, 1.361511e-03, 1.621403e-02, 2.496973e-03, 1.161202e-02, 8.135042e-05, 1.668211e-02, ], 
[6.104467e-04, 2.592270e-03, 0, 2.951400e-04, 8.061428e-05, 6.002401e-04, 0, 1.418239e-04, 0, 2.884429e-03, 0, 0, 5.401901e-05, 0, 9.734699e-04, 6.792892e-04, 0, 0, 1.830754e-04, 1.673382e-04, 4.818424e-04, 9.471379e-04, 0, 0, 0, 4.067521e-05, 6.950880e-02, ]];

//for debug only
// var letter_cond_dist2 = [[0, 0.100128, 0.05319345, 0.04228998, 0.0314711, 0.01802289, 0.03828531, 0.02309769, 0.0751254, 0.05883456, 0.00710104, 0.007744583, 0.03193078, 0.04420958, 0.02080299, 0.06667843, 0.03532501, 0.002754365, 0.02155686, 0.08709898, 0.1409029, 0.009951017, 0.0064244, 0.06219937, 7.35478e-05, 0.01418737, 0.0006104467], [0.08566177, 0.000924293, 0.01926142, 0.03849096, 0.03955336, 0.001094278, 0.00895608, 0.02078066, 0.003229713, 0.04742579, 0.0006693156, 0.01420436, 0.08349446, 0.0312241, 0.1905318, 0.0002762255, 0.01990948, 0.0002018571, 0.1014597, 0.0805941, 0.1265006, 0.01443809, 0.0208869, 0.01201581, 0.001274887, 0.03434758, 0.00259227], [0.02296383, 0.09759627, 0.01474912, 4.667445e-05, 0.0005600933, 0.2415869, 0.0001866978, 0.0002333722, 0.0002800467, 0.0485881, 0.00378063, 4.667445e-05, 0.1707351, 0.0009801634, 0.0008868145, 0.1315753, 0.0001400233, 0, 0.08788798, 0.01600933, 0.003593932, 0.08634772, 0.0007001167, 0.0001400233, 0, 0.07038506, 0], [0.02643143, 0.123139, 3.279334e-05, 0.01498655, 0.0007542467, 0.1472749, 0.0002295534, 3.279334e-05, 0.1609497, 0.04892766, 0, 0.09710107, 0.04141798, 0.0003279334, 0.0003607267, 0.1804617, 9.838001e-05, 0.001344527, 0.05046894, 0.001934807, 0.05735555, 0.03859776, 0, 0, 3.279334e-05, 0.007444087, 0.00029514], [0.5754449, 0.04048852, 0.001652593, 0.0006449142, 0.01322074, 0.1138072, 0.001390596, 0.005542232, 0.001168907, 0.06590217, 0.0003023036, 0.0006852214, 0.0127169, 0.003285032, 0.008766803, 0.06156916, 0.0005441464, 6.046071e-05, 0.02549427, 0.02815454, 0.0005643, 0.01517564, 0.001934743, 0.002841653, 0, 0.01856144, 8.061428e-05], [0.3515453, 0.04953377, 0.002373042, 0.01673693, 0.07789162, 0.0333552, 0.007803121, 0.00616991, 0.003706134, 0.01089506, 0.0002791814, 0.001556437, 0.03986711, 0.01868422, 0.07974818, 0.003552584, 0.01296798, 0.001326112, 0.1330509, 0.06927887, 0.03182668, 0.0015006, 0.01344259, 0.007949692, 0.006253664, 0.01810492, 0.0006002401], [0.381296, 0.07464565, 0.0002220495, 0.0004070908, 0.0001110248, 0.07719922, 0.05051627, 7.401651e-05, 0.0001850413, 0.07386847, 3.700825e-05, 0, 0.04004293, 0.0002220495, 0.0002220495, 0.1463676, 0.0003330743, 3.700825e-05, 0.07438659, 0.002923652, 0.04207838, 0.03327042, 0, 0.0002220495, 0, 0.001332297, 0], [0.3630336, 0.07055737, 0.000992767, 0.0007091193, 0.001028223, 0.1204794, 0.0007800312, 0.0172316, 0.1264714, 0.04850376, 0.0001772798, 0.0002481917, 0.03506595, 0.002091902, 0.01542334, 0.07740037, 0.0007445752, 0, 0.05740321, 0.02372004, 0.002552829, 0.02985392, 3.545596e-05, 0.000992767, 0, 0.004361084, 0.0001418239], [0.1053554, 0.1414455, 0.0008211641, 0.0005063846, 0.0003284657, 0.4673245, 0.001026455, 0.0001094886, 0.0002326632, 0.1359574, 1.368607e-05, 0.0001505468, 0.002039224, 0.001792875, 0.003708925, 0.0733847, 0.0006158731, 6.843034e-05, 0.01256381, 0.002764586, 0.0302599, 0.01200268, 0, 0.0004379542, 0, 0.007089384, 0], [0.0408789, 0.01628854, 0.008047314, 0.04952007, 0.04823541, 0.0321529, 0.02077274, 0.0375097, 0.0001696723, 0.0004968974, 0.000242389, 0.01093174, 0.05056234, 0.04476925, 0.2827346, 0.03687948, 0.01068935, 0.0007756448, 0.04438142, 0.1133774, 0.1232427, 0.001951231, 0.01979106, 9.695559e-05, 0.002593562, 2.42389e-05, 0.002884429], [0.08457711, 0.1496683, 0, 0.0008291874, 0, 0.2043947, 0, 0, 0, 0.03606965, 0, 0, 0, 0, 0.0004145937, 0.3047264, 0, 0, 0, 0, 0, 0.2189055, 0, 0.0004145937, 0, 0, 0], [0.3083921, 0.0118833, 0.003442059, 0.001802983, 0.0009014916, 0.3169972, 0.002622521, 0.001475168, 0.002130798, 0.1535814, 0.0004097689, 0.0009834453, 0.02483199, 0.001966891, 0.07285691, 0.005736764, 0.001147353, 0.0001639076, 0.002704475, 0.06236683, 0.001721029, 0.004015735, 0.0003278151, 0.003114244, 0, 0.01442386, 0], [0.1369022, 0.09215644, 0.002881014, 0.002106742, 0.05720614, 0.153504, 0.01388289, 0.001188418, 0.0004501585, 0.1197962, 1.800634e-05, 0.01047969, 0.1453292, 0.003997407, 0.0004321521, 0.1125756, 0.003601268, 3.601268e-05, 0.0009003169, 0.01991501, 0.01521536, 0.02511884, 0.004285508, 0.004393547, 0, 0.0735739, 5.401901e-05], [0.2105527, 0.1497006, 0.02984607, 0.0007210709, 0.0004389128, 0.2185158, 0.001191335, 0.0001567546, 0.0005329655, 0.08483556, 0.0001881055, 0.0001567546, 0.003323197, 0.01774462, 0.005956673, 0.100511, 0.04313885, 0, 0.02959526, 0.02338778, 0.001159984, 0.0413832, 6.270182e-05, 0.0003135091, 0, 0.03658651, 0], [0.2766133, 0.0281074, 0.002735574, 0.03147142, 0.1594519, 0.08416201, 0.004263552, 0.1462176, 0.00133082, 0.03435486, 0.001022759, 0.01290156, 0.006838934, 0.001836038, 0.01361626, 0.05490863, 0.0006161202, 0.0006161202, 0.001799071, 0.03497098, 0.07864158, 0.006185846, 0.00312989, 0.0009734699, 0.0001971585, 0.01206363, 0.0009734699], [0.1117808, 0.009747261, 0.008625895, 0.01365048, 0.02145691, 0.007957388, 0.1006103, 0.006221427, 0.003547399, 0.01282024, 0.001132149, 0.01370439, 0.03825584, 0.06155654, 0.1298736, 0.05633788, 0.01831924, 0.000204865, 0.1071444, 0.03032002, 0.04290304, 0.1253882, 0.01677737, 0.05169068, 0.001768308, 0.007526093, 0.0006792892], [0.1044307, 0.1225203, 0.001179761, 0.0008302019, 0.0003495587, 0.165516, 0.001179761, 0.0006991174, 0.05597308, 0.07314515, 0.0003058638, 0.0007428122, 0.07904396, 0.0008302019, 0.000524338, 0.1260596, 0.05199685, 0, 0.108101, 0.03202831, 0.02250284, 0.04321419, 4.369484e-05, 0.001136066, 0, 0.007646596, 0], [0.005956813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0007446016, 0, 0, 0.0007446016, 0, 0, 0.992554, 0, 0, 0, 0, 0], [0.2559816, 0.07073751, 0.00398541, 0.01208298, 0.03272825, 0.1954682, 0.003661508, 0.01080145, 0.002563055, 0.08346829, 0.0002253236, 0.01273078, 0.01226605, 0.01525159, 0.02389838, 0.09072089, 0.005112028, 0.0001549099, 0.01919475, 0.05285246, 0.03930488, 0.01995522, 0.004858539, 0.002732048, 1.408272e-05, 0.02906674, 0.0001830754], [0.4211902, 0.04986677, 0.001879336, 0.01444257, 0.000849563, 0.09809878, 0.0009782847, 0.000463398, 0.05863272, 0.05119261, 9.010517e-05, 0.00879169, 0.01168793, 0.008148081, 0.004119093, 0.04279995, 0.02014494, 0.002149652, 0.0005148867, 0.04184741, 0.1242035, 0.02459871, 9.010517e-05, 0.00801936, 0, 0.005033017, 0.0001673382], [0.2531246, 0.03611851, 0.0007473474, 0.006676959, 0.0003835072, 0.09395927, 0.0007571809, 0.0003245061, 0.317603, 0.06464555, 9.833519e-05, 0.0001180022, 0.01444544, 0.001740533, 0.001130855, 0.08835416, 0.0004523419, 2.950056e-05, 0.03133942, 0.02249909, 0.02337427, 0.01741516, 9.833519e-06, 0.009214007, 9.833519e-06, 0.01494695, 0.0004818424], [0.06686201, 0.02208015, 0.0229385, 0.04028296, 0.02104422, 0.03362339, 0.007636299, 0.05232937, 0.0002071864, 0.02808856, 0.0002367845, 0.001479903, 0.09071805, 0.04078612, 0.1130054, 0.002604629, 0.05005032, 5.919612e-05, 0.1447937, 0.1260581, 0.1303794, 0.0003255786, 0.00121352, 2.959806e-05, 0.0008583437, 0.001361511, 0.0009471379], [0.005269558, 0.06880827, 0, 0, 0, 0.6858533, 0, 0, 0, 0.1571747, 0, 0, 0.000304013, 0, 0.0005066883, 0.05968788, 0, 0, 0.0009120389, 0.000304013, 0, 0.002837454, 0.002128091, 0, 0, 0.01621403, 0], [0.1151634, 0.2055085, 0.00155115, 0.0009079903, 0.003972458, 0.1321126, 0.003631961, 0.0001513317, 0.1618114, 0.1815602, 7.566586e-05, 0.001210654, 0.01131205, 0.0003404964, 0.04468069, 0.09692797, 0.0003404964, 0, 0.01479268, 0.01842464, 0.001588983, 0.0006431598, 0, 0.0007944915, 0, 0.002496973, 0], [0.215847, 0.06420765, 0, 0.1222678, 0.0006830601, 0.08743169, 0.01297814, 0, 0.02322404, 0.07855191, 0, 0, 0.003415301, 0.00204918, 0, 0.02800546, 0.159153, 0.009562842, 0.00136612, 0.00273224, 0.1612022, 0.01229508, 0, 0.003415301, 0, 0.01161202, 0], [0.6563352, 0.007972341, 0.005084401, 0.004189546, 0.002643889, 0.06609721, 0.002521863, 0.001667684, 0.003457393, 0.01598536, 0.000203376, 0.000203376, 0.01183649, 0.00789099, 0.009273948, 0.1273541, 0.004881025, 0, 0.006630059, 0.05450478, 0.007484238, 0.0008135042, 0.0004474273, 0.002318487, 8.135042e-05, 8.135042e-05, 4.067521e-05], [0.08619092, 0.06302132, 0.0009267841, 0, 0, 0.4439296, 0, 0.01297498, 0.003707136, 0.08341057, 0, 0, 0.03243744, 0.008341057, 0, 0.1510658, 0.001853568, 0.0009267841, 0.005560704, 0.00463392, 0.003707136, 0.008341057, 0.002780352, 0, 0, 0.01668211, 0.0695088]];

const order = 4;
var word_norm_cond_dist = {};
// var word2idx = {};
// var idx2word = {};

function loadData() {
    var client = new XMLHttpRequest();
    $("#loadSelect").hide();
    $("#loadProgress").show();
    const files = {
        1: "ulysses.txt",
        2: "shakespeare.txt",
        3: "advantures_of_sherlock_holmes.txt",
        4: "pride_and_prejudice.txt",
        5: "trump.txt"
    };
    var filename = files[$("#txtSelect")[0].value];
    // console.log(filename);
    client.open('GET', '/~ffh8x/moi/assets/txt/' + filename);
    client.onreadystatechange = function() {
        if (client.readyState === XMLHttpRequest.DONE) {
            if (client.status == 200) {
                genTable(client.responseText);
                $("#loadProgressText")[0].innerHTML = "Loaded.";
            }
            else {
                $("#loadProgressText")[0].innerHTML = "Oops, something went wrong (try another browser or ask for help on Piazza): " + client.statusText;
            }    
        }
    }
    $("#loadProgressText")[0].innerHTML = "Loading...  " + filename;
    client.send();
}

function tryAnother() {
    $("#loadSelect").show();
    $("#loadProgress").hide();
}

function genTable(txt) {
    /////////////////////////////////////////// char
    var counts = {};
    for (var i = 0; i < order; ++i) {
        counts[i] = new Array();
        for (var j = 0; j < Math.pow(27, i); ++j) {
            counts[i].push(Array(27).fill(0.000001));
        }
    }
    txt = txt.toLowerCase();
    var prev_letter = new Array(order).fill(0);
    for (var i = 0; i < txt.length; ++i) {
        var code = txt.charCodeAt(i);
        if (code == 32) {
            inc_counter(0, prev_letter, counts, order);
        }
        if (code >= 97 && code <=122) {
            inc_counter(code - 96, prev_letter, counts, order);
        }
    }
    
    for (var i = 0; i < order; ++i) {
        for (var j = 0; j < counts[i].length; ++j) {
            var sum = 0;
            for (var k = 0; k < 27; ++k) {
                sum += counts[i][j][k];
            }
            for (var k = 0; k < 27; ++k) {
                counts[i][j][k] /= sum;
            }
        }
    }
    letter_norm_cond_dist = counts;
    /////////////////////////////////////// word
    dict = {}
    var words = txt.split(/(\W+)/);
    for (var i = 0; i < words.length; ++i) {
        var word = words[i];
        word = word.replace(/\W+/g, '');
        // word = stemmer(word.replace(/\W+/g, ''));
        if (word.length >= 2) {

            if (dict[word] >= 0) {
                dict[word] += 1;
            }
            else {
                dict[word] = 1;
            }
        }
    }
    var new_dict = {};
    var idx = 0;
    idx2word = {};
    word2idx = {};
    for (var word in dict) {
        // console.log(word)
        if (dict[word] >= 3) {
            new_dict[word] = dict[word];
            word2idx[word] = idx;
            idx2word[idx] = word;
            idx += 1;
        }
    }
    dict = new_dict;
    // console.log(filtered);
    
    var dict_size = Object.keys(dict).length; 
    // console.log(dict, dict_size);
    
    counts = {0: new Array(), 1: new Array()};
    counts[0].push(new Array(dict_size).fill(0.000001));
    for (var j = 0; j < dict_size; ++j) {
        counts[1].push(Array(dict_size).fill(0.000001));
    }
    // console.log(counts);
    var prev_idx = 0;
    for (var i = 0; i < words.length; ++i) {
        var word = words[i];
        word = word.replace(/\W+/g, '');
        // word = stemmer(word.replace(/\W+/g, ''));
        if (word.length >= 2) {
            idx = word2idx[word];
            if (!(idx >= 0)) {
                // console.log(idx, word);return;
                continue;
            }
            counts[0][0][idx] += 1;
            try {
                counts[1][prev_idx][idx] += 1;
            }
            catch (error) {
                console.log(counts, prev_idx, idx);
            }
            prev_idx = idx;
        }
    }
    for (var i = 0; i < 2; ++i) {
        for (var j = 0; j < counts[i].length; ++j) {
            var sum = 0;
            for (var k = 0; k < dict_size; ++k) {
                sum += counts[i][j][k];
            }
            for (var k = 0; k < dict_size; ++k) {
                counts[i][j][k] /= sum;
            }
        }
    }
    word_norm_cond_dist = counts;
}

function find_loc(prev_letter, hist_len) {
    var loc = 0;
    for (var j = 0; j < hist_len; j++) {
        loc += prev_letter[j] * Math.pow(27, j);
    }
    return loc;
}

function inc_counter(pos, prev_letter, counts, order) {
    counts[0][0][pos] += 1;
    // console.log(counts, prev_letter);
    for (var i = 1; i < order; ++i) {
        var loc = find_loc(prev_letter, i);
        // console.log(loc);
        counts[i][loc][pos] += 1;
    }
    for (var i = order - 1; i >= 1; --i) {
        prev_letter[i] = prev_letter[i - 1];
    }
    prev_letter[0] = pos;
}

function genText(mem, len, target) {
    var out_str = "";
    var prev_letter = new Array(order).fill(0);
    for (var j = 0; j < len; ++j) {
        //   console.log(prev_letter);
        //   var this_letter = drawLetter(letter_cond_dist2[prev_letter]);
        var loc = find_loc(prev_letter, mem);
        var this_letter = drawLetter(letter_norm_cond_dist[mem][loc]);
        for (var i = order - 1; i >= 1; --i) {
            prev_letter[i] = prev_letter[i - 1];
        }
        prev_letter[0] = this_letter;
        out_str += letters[this_letter];
    }
    document.getElementById(target).innerHTML = (out_str + ".").toUpperCase();
}

function drawLetter(arr) {
    var tgt = Math.random();
    var sum = 0.;
    for (var i = 0; i < 27; ++i) {
        sum += arr[i];
        if (sum >= tgt) {
            return i;
        }
    }
    return 26;
}

function genTextWord(mem, len, target) {
    var out_str = "";
    var prev_idx = Math.round(word_norm_cond_dist[0][0].length * Math.random());
    for (var j = 0; j < len; ++j) {
        var loc = 0;
        if (mem == 0) {
            loc = 0;
        }
        else {
            loc = prev_idx;
        }
        var this_word_idx = drawWord(word_norm_cond_dist[mem][loc]);
        var this_word = idx2word[this_word_idx];
        prev_idx = this_word_idx;
        out_str += " " + this_word;
    }
    document.getElementById(target).innerHTML = (out_str + ".").toUpperCase();
}

function drawWord(arr) {
    var tgt = Math.random();
    var sum = 0.;
    for (var i = 0; i < arr.length; ++i) {
        sum += arr[i];
        if (sum >= tgt) {
            return i;
        }
    }
    return arr.length;
}

// Porter stemmer in Javascript. Few comments, but it's easy to follow against the rules in the original
// paper, in
//
//  Porter, 1980, An algorithm for suffix stripping, Program, Vol. 14,
//  no. 3, pp 130-137,
//
// see also http://www.tartarus.org/~martin/PorterStemmer

// Release 1 be 'andargor', Jul 2004
// Release 2 (substantially revised) by Christopher McKenzie, Aug 2009

var stemmer = (function(){
	var step2list = {
			"ational" : "ate",
			"tional" : "tion",
			"enci" : "ence",
			"anci" : "ance",
			"izer" : "ize",
			"bli" : "ble",
			"alli" : "al",
			"entli" : "ent",
			"eli" : "e",
			"ousli" : "ous",
			"ization" : "ize",
			"ation" : "ate",
			"ator" : "ate",
			"alism" : "al",
			"iveness" : "ive",
			"fulness" : "ful",
			"ousness" : "ous",
			"aliti" : "al",
			"iviti" : "ive",
			"biliti" : "ble",
			"logi" : "log"
		},

		step3list = {
			"icate" : "ic",
			"ative" : "",
			"alize" : "al",
			"iciti" : "ic",
			"ical" : "ic",
			"ful" : "",
			"ness" : ""
		},

		c = "[^aeiou]",          // consonant
		v = "[aeiouy]",          // vowel
		C = c + "[^aeiouy]*",    // consonant sequence
		V = v + "[aeiou]*",      // vowel sequence

		mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
		meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
		mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
		s_v = "^(" + C + ")?" + v;                   // vowel in stem

	return function (w) {
		var 	stem,
			suffix,
			firstch,
			re,
			re2,
			re3,
			re4,
			origword = w;

		if (w.length < 3) { return w; }

		firstch = w.substr(0,1);
		if (firstch == "y") {
			w = firstch.toUpperCase() + w.substr(1);
		}

		// Step 1a
		re = /^(.+?)(ss|i)es$/;
		re2 = /^(.+?)([^s])s$/;

		if (re.test(w)) { w = w.replace(re,"$1$2"); }
		else if (re2.test(w)) {	w = w.replace(re2,"$1$2"); }

		// Step 1b
		re = /^(.+?)eed$/;
		re2 = /^(.+?)(ed|ing)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			re = new RegExp(mgr0);
			if (re.test(fp[1])) {
				re = /.$/;
				w = w.replace(re,"");
			}
		} else if (re2.test(w)) {
			var fp = re2.exec(w);
			stem = fp[1];
			re2 = new RegExp(s_v);
			if (re2.test(stem)) {
				w = stem;
				re2 = /(at|bl|iz)$/;
				re3 = new RegExp("([^aeiouylsz])\\1$");
				re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
				if (re2.test(w)) {	w = w + "e"; }
				else if (re3.test(w)) { re = /.$/; w = w.replace(re,""); }
				else if (re4.test(w)) { w = w + "e"; }
			}
		}

		// Step 1c
		re = /^(.+?)y$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			re = new RegExp(s_v);
			if (re.test(stem)) { w = stem + "i"; }
		}

		// Step 2
		re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				w = stem + step2list[suffix];
			}
		}

		// Step 3
		re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				w = stem + step3list[suffix];
			}
		}

		// Step 4
		re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
		re2 = /^(.+?)(s|t)(ion)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			re = new RegExp(mgr1);
			if (re.test(stem)) {
				w = stem;
			}
		} else if (re2.test(w)) {
			var fp = re2.exec(w);
			stem = fp[1] + fp[2];
			re2 = new RegExp(mgr1);
			if (re2.test(stem)) {
				w = stem;
			}
		}

		// Step 5
		re = /^(.+?)e$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			re = new RegExp(mgr1);
			re2 = new RegExp(meq1);
			re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
			if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
				w = stem;
			}
		}

		re = /ll$/;
		re2 = new RegExp(mgr1);
		if (re.test(w) && re2.test(w)) {
			re = /.$/;
			w = w.replace(re,"");
		}

		// and turn initial Y back to y

		if (firstch == "y") {
			w = firstch.toLowerCase() + w.substr(1);
		}

		return w;
	}
})();