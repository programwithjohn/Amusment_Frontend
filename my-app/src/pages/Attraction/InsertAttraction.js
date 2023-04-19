import React, { useState } from 'react';
import './InsertAttraction.css';

function validateAttractionName(attractionName) {
  if (attractionName.length === 0 || attractionName.length > 30) {
    return false;
  }
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(attractionName)) {
    return false;
  }
  return true;
}

function validateZoneId(zoneId) {
  if (zoneId.length === 0 || zoneId.length > 1) {
    return false;
  }
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(zoneId)) {
    return false;
  }
  return true;
}

function validateHeightRequirement(rideCapacity) {
  if (rideCapacity === 0 || rideCapacity === null) { //do not know if there is a max limit for a single ride cap. if so, modify this if statement
    return false;
  }
  const regex = /^[0-9\b]+$/;
  if (!regex.test(rideCapacity)) {
    return false;
  }
  return true;
}

function validateRideCapacity(rideCapacity) {
  if (rideCapacity === 0 || rideCapacity === null) { //do not know if there is a max limit for a single ride cap. if so, modify this if statement
    return false;
  }
  const regex = /^[0-9\b]+$/;
  if (!regex.test(rideCapacity)) {
    return false;
  }
  return true;
}

function validateHourlyCapacity(hourlyCapacity) {
  if (hourlyCapacity === 0) { //do not know if there is a max limit for a hourly cap. if so, modify this if statement
    return false;
  }
  const regex = /^[0-9\b]+$/;
  if (!regex.test(hourlyCapacity)) {
    return false;
  }
  return true;
}

function validateRideCategory(rideCategory) {
  if (rideCategory.length === 0) {
    return false;
  }
  return true;
}

function validateRideType(rideType) {
  if (rideType.length === 0) {
    return false;
  }
  return true;
}

function validateConcessionFoodType(concessionFoodType) {
  if (concessionFoodType.length === 0 || concessionFoodType.length > 30) {
    return false;
  }
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(concessionFoodType)) {
    return false;
  }
  return true;
}

const InsertAttraction = () => {
  /* insert new attraction */
  const [ZoneId, setZoneId] = useState('');
  const [attractionName, setAttractionName] = useState('');
  const [attractionImage, setAttractionImage] = useState(false);
  const [attractionCategory, setAttractionCategory] = useState('');

  /*new ride*/
  const [rideHeightRequirement, setRideHeightRequirement] = useState(0);
  const [rideType, setRideType] = useState('');
  const [rideCapacity, setRideCapacity] = useState(null);
  const [hourlyCapacity, setHourlyCapacity] = useState(null);

  /*new concession*/
  const [concessionFoodType, setConcessionFoodType] = useState('');

  /*error messages */
  const [zoneIdError, setzoneIdError] = useState('');
  const [attractionNameError, setAttractionNameError] = useState('');
  const [rideTypeError, setRideTypeError] = useState('');
  const [rideCategoryError, setRideCategoryError] = useState('');
  const [rideCapacityError, setRideCapacityError] = useState('');
  const [hourlyCapacityError, setHourlyCapacityError] = useState('');
  const [concessionFoodTypeError, setConcessionFoodTypeError] = useState('');
  const [attractionExistError, setAttractionExistError] = useState('');
  const [heightRequirementError, setHeightRequirementError] = useState('')

  /* set errror margins */
  const [zoneIdMarginBottom, setzoneIdMarginBottom] = useState('1em');
  const [attractionNameMarginBottom, setAttractionNameMarginBottom] = useState('1em');
  const [rideTypeMarginBottom, setrideTypeMarginBottom] = useState('1em');
  const [rideCategoryMarginBottom, setRideCategoryMarginBottom] = useState('1em');
  const [rideCapacityMarginBottom, setRideCapacityMarginBottom] = useState('1em');
  const [hourlyCapacityMarginBottom, setHourlyCapacityMarginBottom] = useState('1em');
  const [concessionFoodTypeMarginBottom, setConcessionFoodTypeMarginBottom] = useState('1em');
  const [heightRequirementMarginBottom, setHeightRequirementMarginBottom] = useState('1em')

  //other
  const [imageFileValue, setImageFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [showErrorBox, setShowErrorBox] = useState(false);

  //reset form
  const resetForm = () => {
    setZoneId('');
    setAttractionName('');
    setAttractionImage(false);
    setAttractionCategory('');
    setRideHeightRequirement(0);
    setRideType('');
    setRideCapacity(null);
    setHourlyCapacity(null);
    setConcessionFoodType('');
    setzoneIdError('');
    setAttractionNameError('');
    setImageFile(null);
    setAttractionExistError('');
    setRideTypeError('');
    setRideCapacityError('');
    setConcessionFoodTypeError('');
    setHeightRequirementError('')
  };

  //handle change functions
  const handleOptionChange = (e) => {

    setSelectedOption(e.target.value);
    setIsOptionSelected(true);
    resetForm();
  };

  const handleAttractionNameChange = (event) => {
    const attractionName = event.target.value;
    setAttractionName(attractionName);
    if (!validateAttractionName(attractionName)) {
      setAttractionNameError("Please enter a valid attraction name no more than 30 characters");
      setAttractionNameMarginBottom("1em");
    } else {
      setAttractionNameError("");
      setAttractionNameMarginBottom("1em");
    }
  };

  const handleZoneIdChange = (event) => {
    const ZoneId = event.target.value;
    setZoneId(ZoneId);
    if (!validateZoneId(ZoneId)) {
      setzoneIdError("Please enter a valid Zone Id with no more than 1 character")
      setzoneIdMarginBottom("1em");
    } else {
      setzoneIdError("");
      setzoneIdMarginBottom("1em");
    }
  };

  // Handle image change
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) setImageFile(file);
    
  };

  const handleRideTypeChange = (e) => {
    const rideType = e.target.value;
    setRideType(rideType);
    setRideHeightRequirement('');
    if (!validateRideType(rideType)) {
      setRideTypeError("Please select a ride type");
      setrideTypeMarginBottom("1em");
    } else {
      setRideTypeError("");
      setrideTypeMarginBottom("1em");
    }
  };

  const handleCategoryChange = (e) => {
    const attractionCategory = e.target.value;
    setAttractionCategory(attractionCategory);
    if (!validateRideCategory(attractionCategory)) {
      setRideCategoryError("Please select a ride type");
      setRideCategoryMarginBottom("1em");
    } else {
      setRideCategoryError("");
      setRideCategoryMarginBottom("1em");
    }
  };

  const handleHeightRequirementChange = (e) => {
    const rideHeightRequirement = e.target.value;
    setRideHeightRequirement(rideHeightRequirement);
    if (!validateHeightRequirement(rideHeightRequirement)) {
      setHeightRequirementError("Please put a height requirement (numbers only)")
      setHeightRequirementMarginBottom("1em")
    } else {
      setHeightRequirementError("")
      setHeightRequirementMarginBottom("1em")
    }
  };

  const handleRideCapacityChange = (event) => {
    const rideCapacity = event.target.value;
    setRideCapacity(rideCapacity);
    if (!validateRideCapacity(rideCapacity)) {
      setRideCapacityError("Please enter a valid ride capacity digit");
      setRideCapacityMarginBottom("1em");
    } else {
      setRideCapacityError("");
      setRideCapacityMarginBottom("1em");
    }
  };

  const handleHourlyCapacityChange = (event) => {
    const hourlyCapacity = event.target.value;
    setHourlyCapacity(hourlyCapacity);
    if (!validateHourlyCapacity(hourlyCapacity)) {
      setHourlyCapacityError("Please enter a valid hourly capacity digit");
      setHourlyCapacityMarginBottom("1em");
    } else {
      setHourlyCapacityError("");
      setHourlyCapacityMarginBottom("1em");
    }
  }


  const handleConcessionFoodTypeChange = (event) => {
    const concessionFoodType = event.target.value;
    setConcessionFoodType(concessionFoodType);
    if (!validateConcessionFoodType(concessionFoodType)) {
      setConcessionFoodTypeError("Please enter a valid concession food type no more than 30 characters");
      setConcessionFoodTypeMarginBottom("1em");
    } else {
      setConcessionFoodTypeError("");
      setConcessionFoodTypeMarginBottom("1em");
    }
  }

  /* submit form */
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (selectedOption === 'ride') {
      //handle ride form submission
      const validZoneId = validateZoneId(ZoneId);
      const validattractionName = validateAttractionName(attractionName);
      const validrideType = validateRideType(rideType);
      const validRideCapacity = validateRideCapacity(rideCapacity);
      const validHourlyCapacity = validateHourlyCapacity(hourlyCapacity);
      if (!validattractionName || !validZoneId || !validrideType || !validRideCapacity || !validHourlyCapacity) {
        setShowErrorBox(true);
        return;
      }

      // Check if Ride exist within the db
      const rideExistRes = await fetch('http://localhost:8080/ride/exist?' +  new URLSearchParams({
        name: attractionName
      }))
      const rideExistData = await rideExistRes.json();

      // If ride doesn't exist continue
      if (!rideExistData.item) {

        //Get and insert image into database.
        const imageForm = new FormData()
        imageForm.append('image', imageFileValue);

        const imageInit = await fetch('http://localhost:8080/image/add', {
          method: 'POST',
          body: imageForm.get('image')
        });  
        const imagePathJSON = await imageInit.json()

        // Finally, add ride towards the db
        const concessionData = {
          zone_id: ZoneId,
          category: attractionCategory,
          type: rideType,
          name: attractionName,
          capacity: rideCapacity,
          hour_capacity: hourlyCapacity,
          height_requirement: rideHeightRequirement,
          image: imagePathJSON.item
        };

        const response = await fetch('http://localhost:8080/ride/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(concessionData)
        });
        
      } else {
        setAttractionExistError("Ride already exist with that name, try a different name!")
      }
    }
    else if (selectedOption === 'concession') {
      //handle concession form submission
      const validZoneId = validateZoneId(ZoneId);
      const validattracitonName = validateAttractionName(attractionName);
      if (!validZoneId || !validattracitonName) {
        setShowErrorBox(true);
        return;
      }
      const concessionData = {
        attractionName,
        ZoneId,
        concessionFoodType,
        attractionImage,
      };
      //don't know how to account for concession description to display in our frontend

      /*
      INSERT THE FETCH HERE FOR CONCESSION
      */
    }
    else if (selectedOption === 'giftshop') {
      //handle gift shop form submission
      const validZoneId = validateZoneId(ZoneId);
      const validattracitonName = validateAttractionName(attractionName);
      if (!validZoneId || !validattracitonName) {
        setShowErrorBox(true);
        return;
      }
      const giftshopData = {
        ZoneId,
        attractionName,
      };
      /*
      INSERT THE FETCH HERE FOR GIFT SHOP
      */
    }
    //after form submited, page can redirect back to 'select option to insert'
  };

  return (
    <div>
      <div className='admin-insert-body'>
        <div className='admin-insert-cover'>
          <h1 className='admin-insert-title'>Add new Ride, Concession, and Gift Shop</h1>
          <form className='admin-insert-form' onSubmit={handleFormSubmit}>
            <h3 className='select-option-title'>Select an option to insert:</h3>
            <select className='select-option' value={selectedOption} onChange={handleOptionChange}>
              <option value="" disabled>
                Select an option
              </option>

              <option value="ride">Ride</option>
              <option value="concession">Concession</option>
              <option value="giftshop">Gift Shop</option>
            </select>


            {selectedOption === "" && (
              <div className="option-empty-title-container" >
                <h2 className='admin-insert-title'>Please select an option from the dropdown menu to insert a new ride, concession, or gift shop!</h2>
              </div>
            )}

            {selectedOption === 'ride' && (
              <div className='admin-option-box'>
                <div className='admin-error'>{attractionExistError}</div>
                <h3 className='option-title'>Zone id:</h3>
                <input type='text' placeholder='Eneter zone id' className='option-input' value={ZoneId} onChange={handleZoneIdChange} style={{ marginBottom: zoneIdMarginBottom }} />
                <div className='admin-error'>{zoneIdError}</div>

                <h3 className='option-title'>Ride name:</h3>
                <input type='text' placeholder='Enter ride name' className='option-input' value={attractionName} onChange={handleAttractionNameChange} style={{ marginBottom: attractionNameMarginBottom }} />
                <div className='admin-error'>{attractionNameError}</div>

                <div className='option-insert-img'>
                  <h3 className='option-title'>Ride image:</h3>
                  <input type='file' id="imageUpload" onChange={handleFileSelect} accept="image/jpg" className='option-input-img'></input>
                </div>

                <h3 className='option-title'>Ride Category:</h3>
                <select className='ride-select-option' value={attractionCategory} onChange={handleCategoryChange} style={{ marginBottom: rideCategoryMarginBottom }}>
                <option value="" disabled>Select an option</option>
                  <option>RollerCoaster</option>
                  <option>WaterCoaster</option>
                  <option>Spinner</option>
                  <option>Swing</option>
                  <option>Dropper</option>
                </select>
                <div className='admin-error'>{rideCategoryError}</div>
                {/* <input type='text' placeholder='Enter ride type' value={attractionCategory} className='option-input' /> */}

                <h3 className='option-title'>Ride type:</h3>
                <select className='ride-select-option' value={rideType} onChange={handleRideTypeChange} style={{ marginBottom: rideTypeMarginBottom }}>
                  <option value="" disabled>Select an option</option>
                  <option>Adult</option>
                  <option>Child</option>
                </select>
                <div className='admin-error'>{rideTypeError}</div>

                <h3 className='option-title'>Ride height requirement (in):</h3>
                <input type='number' min='0' placeholder='Enter ride capactiy' className='option-input' value={rideHeightRequirement} onChange={handleHeightRequirementChange} style={{ marginBottom: heightRequirementMarginBottom }} />
                <div className='admin-error'>{heightRequirementError}</div>

                <h3 className='option-title'>Ride capacity:</h3>
                <input type='number' min='0' placeholder='Enter ride capactiy' className='option-input' value={rideCapacity} onChange={handleRideCapacityChange} style={{ marginBottom: rideCapacityMarginBottom }} />
                <div className='admin-error'>{rideCapacityError}</div>

                <h3 className='option-title'>Hour capacity:</h3>
                <input type='number' min='0' placeholder='Enter hour capactiy' className='option-input' value={hourlyCapacity} onChange={handleHourlyCapacityChange} style={{ marginBottom: hourlyCapacityMarginBottom }} />
                <div className='admin-error'>{hourlyCapacityError}</div>
              </div>
            )}

            {selectedOption === 'concession' && (
              <div className='admin-option-box'>
                <h3 className='option-title'>Zone id:</h3>
                <input type='text' placeholder='Eneter zone id' className='option-input' value={ZoneId} onChange={handleZoneIdChange} style={{ marginBottom: zoneIdMarginBottom }} />
                <div className='admin-error'>{zoneIdError}</div>

                <h3 className='option-title'>Concession name:</h3>
                <input type='text' placeholder='Enter ride name' className='option-input' value={attractionName} onChange={handleAttractionNameChange} style={{ marginBottom: attractionNameMarginBottom }} />
                <div className='admin-error'>{attractionNameError}</div>

                <div className='option-insert-img'>
                  <h3 className='option-title'>Concession image:</h3>
                  <input type='file' className='option-input-img'></input>
                </div>

                <h3 className='option-title'>Concession food type:</h3>
                <input type='text' placeholder='Enter concession food type' className='option-input' value={concessionFoodType} onChange={handleConcessionFoodTypeChange} style={{ marginBotttom: concessionFoodTypeMarginBottom }} />
                <div className='admin-error'>{concessionFoodTypeError}</div>

              </div>
            )}
            {selectedOption === 'giftshop' && (
              <div className='admin-option-box'>
                <h3 className='option-title'>Zone id:</h3>
                <input type='text' placeholder='Eneter zone id' className='option-input' value={ZoneId} onChange={handleZoneIdChange} style={{ marginBottom: zoneIdMarginBottom }} />
                <div className='admin-error'>{zoneIdError}</div>

                <h3 className='option-title'>Giftshop name:</h3>
                <input type='text' placeholder='Enter ride name' className='option-input' value={attractionName} onChange={handleAttractionNameChange} style={{ marginBottom: attractionNameMarginBottom }} />
                <div className='admin-error'>{attractionNameError}</div>

              </div>
            )}

            <button className='admin-insert-button' style={{ display: isOptionSelected ? 'block' : 'none' }}>
              submit
            </button>
            {showErrorBox && (
              <div>
                <div className='error-box-overlay'></div>
                <div className='error-box'>
                  <h3 className='error-box-text'>Error</h3>
                  <p className='error-box-text'>Please correct the errors and try again.</p>
                  <ul className='error-box-ul'>
                    {(!validateZoneId(ZoneId) && <li>Please enter a valid zone id</li>)}
                    {(!validateAttractionName(attractionName) && <li>Please enter a valid attraction name</li>)}
                    {(selectedOption === "ride" && !validateRideType(rideType) && <li>Please select a valid ride type</li>)}
                    {(selectedOption === "ride" && !validateRideCapacity(rideCapacity) && <li>Please enter a valid ride capacity digit</li>)}
                    {(selectedOption === "ride" && !validateHourlyCapacity(hourlyCapacity) && <li>Please enter a valid hourly capacity digit</li>)}
                    <button className='return-button' onClick={() => setShowErrorBox(false)}>return</button>
                  </ul>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertAttraction;