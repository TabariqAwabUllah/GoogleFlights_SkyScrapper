import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/COLORS'

const TravelModal = ({travelPress, economyPress, travelerCount}) => {
    console.log('Travel Modal');
    const [travelerModal, setTravelerModal] = useState(false);
        const [travelers, setTravelers] = useState({
        adults: 1,
        children: 2,
        infants: 0,
        infantsOnLap: 0
      });
      const [travelingClassView, setTravelingClassView] = useState(false)
      const [travelingClass, setTravelingClass] = useState('Economy')

      const bookingClass = ['Economy', 'Premium Economy', 'Business', 'First']
      console.log('travelers', travelers);
      
      const [totalTravelers, setTotalTravelers] = useState(5)



    const onClose = () => {
        setTravelerModal(!travelerModal);
        console.log("travelerMOdal func", travelerModal);
    }

    


    const submitButton = () =>{
        // setTravelerModal(false);1
        console.log('Selected travelers:', travelers);
        const total = travelers.adults + travelers.children + travelers.infants + travelers.infantsOnLap;
        setTravelerModal(!travelerModal)
        setTotalTravelers(total)
    }
    
    
    
    const economyView = () =>{
        setTravelingClassView(true)
    }

    const setBookingClass =(item)=>{
        setTravelingClass(item)
        setTravelingClassView(false)
    }

    const TravelerRow = ({ title, subtitle, count, onDecrease, onIncrease }) => (
    <View style={styles.travelerRow}>
      <View style={styles.travelerInfo}>
        <Text style={styles.travelerTitle}>{title}</Text>
        {subtitle && <Text style={styles.travelerSubtitle}>{subtitle}</Text>}
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity 
          style={[styles.counterButton, count === 0 && styles.disabledButton]}
          onPress={onDecrease}
        //   disabled={count === 0}
        >
          <Text style={[styles.counterButtonText, count === 0 && styles.disabledText]}>−</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity 
          style={styles.counterButton}
          onPress={onIncrease}
        >
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

   const updateTravelerCount = (type, increment) => {
    setTravelers(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };
    
  return (
    <View style={styles.container}>

        <View>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>onClose()}>
                <Icon name='person' size={24} color={COLORS.icon} />
                <Text>Traveler: {totalTravelers} </Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity 
            onPress={economyView}
            style={styles.button}>
                <Icon name='person' size={24} color={COLORS.icon} />
                <Text>{travelingClass}</Text>
            </TouchableOpacity>

            
            {/* Menu for class selection */}
            {
                travelingClassView && bookingClass.map((item, index)=>(
                    <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={()=>setBookingClass(item)}>
                        <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>

        <Modal
        visible={travelerModal}
        animationType='slide'
        transparent={true} // Add this for custom sizing
        >
            <View style={styles.modalContainer} 
            // onStartShouldSetResponder={()=>true}
            // onResponderRelease={()=>onClose()}
            >
                {/* Overlay to close modal when tapping outside */}
                <TouchableOpacity 
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={onClose}
                />

                <View style={styles.modalDisplay}>
                    <Icon name='expand-more' size={24} color={COLORS.icon} onPress={()=>onClose()}/>
                    <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Travelers</Text>
            </View>

            <View style={styles.travelersContainer}>
              <TravelerRow
                title="Adults"
                count={travelers.adults}
                onDecrease={() => updateTravelerCount('adults', false)}
                onIncrease={() => updateTravelerCount('adults', true)}
              />
              
              <TravelerRow
                title="Children"
                subtitle="Aged 2-11"
                count={travelers.children}
                onDecrease={() => updateTravelerCount('children', false)}
                onIncrease={() => updateTravelerCount('children', true)}
              />
              
              <TravelerRow
                title="Infants"
                subtitle="In seat"
                count={travelers.infants}
                onDecrease={() => updateTravelerCount('infants', false)}
                onIncrease={() => updateTravelerCount('infants', true)}
              />
              
              <TravelerRow
                title="Infants"
                subtitle="On lap"
                count={travelers.infantsOnLap}
                onDecrease={() => updateTravelerCount('infantsOnLap', false)}
                onIncrease={() => updateTravelerCount('infantsOnLap', true)}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.doneButton}
                onPress= {
                  submitButton
                }
              >
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
                </View>
            </View>
    </Modal>

    </View>
  )
}

export default TravelModal

const styles = StyleSheet.create({
    container:{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'),},
    button: {flexDirection: 'row', alignItems: 'center', padding: wp('1%')  },
    dropdownItem: {
        flexDirection: 'column',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#374151',
    },

    modalContainer: { 
        flex: 1, 
        justifyContent: 'flex-end',
           backgroundColor: COLORS.modalBackground, // Semi-transparent background
    },
    overlay: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    // modalDisplay: { 
    //     width: wp('100%'), 
    //     height: hp('50%'), 
    //     backgroundColor: COLORS.gray,
    //     borderTopRightRadius: wp('5%'),
    //     padding: wp('2%'),
        
    // },
    modalDisplay: { 
        width: wp('100%'), 
        minHeight: hp('50%'), // Use minHeight instead of fixed height
        backgroundColor: COLORS.gray,
        borderTopRightRadius: wp('5%'),
        borderTopLeftRadius: wp('5%'),
        paddingHorizontal: wp('4%'),
        paddingTop: wp('2%'),
        paddingBottom: wp('4%'), // Add bottom padding for safe area
        // Remove any margin that might cause gap
        marginBottom: 0,
    },
    travelerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
  },
  travelerInfo: {
    flex: 1,
  },
  travelerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.darkGray,
  },
   travelerSubtitle: {
    fontSize: 14,
    color: COLORS.lightGray,
    marginTop: 2,
  },
    counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: COLORS.gray,
    borderRadius: 8,
    overflow: 'hidden',
  },  
  counterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.white,
  },
   counterButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.blue,
  },
   disabledButton: {
    // backgroundColor: COLORS.gray,
  },
    disabledText: {
    color: COLORS.lightGray,
  },
    counterButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.blue,
  },
    modalContent: {
        width: wp('100%'),
        height: hp('50%'),
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
  },
    modalHeader: {
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
  },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        // color: COLORS.darkGray,
  },
    travelersContainer: {
        flex: 1,
  },
   buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginTop: 'auto',
    // borderTopWidth: 1,
    // borderTopColor: COLORS.border,
  },
   cancelButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.lightPrimary,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.darkGray,
  },
    doneButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },

})